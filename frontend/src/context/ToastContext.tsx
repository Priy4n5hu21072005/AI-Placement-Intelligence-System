import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

interface ToastContextType {
    addToast: (message: string, type: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = useCallback((message: string, type: ToastType) => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => {
            removeToast(id);
        }, 5000);
    }, []);

    const removeToast = useCallback((id: string) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 pointer-events-none">
                <AnimatePresence>
                    {toasts.map(toast => (
                        <motion.div
                            key={toast.id}
                            initial={{ opacity: 0, x: 100, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 100, scale: 0.9 }}
                            className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl min-w-[300px] border glass
                ${toast.type === 'success' ? 'border-emerald-500/50 bg-emerald-500/10' :
                                    toast.type === 'error' ? 'border-rose-500/50 bg-rose-500/10' :
                                        'border-blue-500/50 bg-blue-500/10'}`}
                        >
                            {toast.type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-500" />}
                            {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-rose-500" />}
                            {toast.type === 'info' && <Info className="w-5 h-5 text-blue-500" />}
                            <span className="text-sm font-medium text-white">{toast.message}</span>
                            <button
                                onClick={() => removeToast(toast.id)}
                                className="ml-auto p-1 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <X className="w-4 h-4 text-slate-400" />
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (context === undefined) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
