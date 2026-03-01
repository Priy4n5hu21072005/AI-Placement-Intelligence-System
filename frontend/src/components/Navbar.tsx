import { Link } from 'react-router-dom';
import { BrainCircuit, Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="sticky top-0 z-50 glass border-b border-black/5 dark:border-white/5 py-4 px-6 md:px-12 flex justify-between items-center backdrop-blur-md">
            <Link to="/" className="flex items-center gap-2 group">
                <div className="p-2 bg-primary rounded-lg group-hover:rotate-12 transition-transform duration-300">
                    <BrainCircuit className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">AI Placement <span className="text-primary">Intelligence</span></span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
                <Link to="/" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors">Home</Link>
                <Link to="/predict" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors">Predict Chance</Link>
                <Link to="/insights" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors">Model Insights</Link>

                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors border border-black/5 dark:border-white/10"
                    title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                <Link to="/predict" className="btn-primary py-2 text-sm shadow-none">Try Now</Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-4 md:hidden">
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button className="text-slate-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-white dark:bg-[#020617] border-b border-black/5 dark:border-white/5 p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top duration-300">
                    <Link to="/" onClick={() => setIsOpen(false)} className="text-slate-600 dark:text-slate-300">Home</Link>
                    <Link to="/predict" onClick={() => setIsOpen(false)} className="text-slate-600 dark:text-slate-300">Predict Chance</Link>
                    <Link to="/insights" onClick={() => setIsOpen(false)} className="text-slate-600 dark:text-slate-300">Model Insights</Link>
                    <Link to="/predict" onClick={() => setIsOpen(false)} className="btn-primary py-2 text-center">Try Now</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
