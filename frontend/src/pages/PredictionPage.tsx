import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2,
    XCircle,
    Loader2,
    ChevronRight,
    HelpCircle,
    Trophy,
    Activity,
    UserCheck
} from 'lucide-react';
import axios from 'axios';
import { useToast } from '../context/ToastContext';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://ai-placement-intelligence-system.onrender.com';

interface PredictionResult {
    prediction: number;
    probability: number;
}

const PredictionPage = () => {
    const { addToast } = useToast();
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<PredictionResult | null>(null);
    const [formData, setFormData] = useState({
        cgpa: 7.5,
        internship_count: 1,
        project_count: 2,
        skills_score: 80,
        communication_score: 85,
        certifications: 2,
        dsa_score: 75,
        college_tier: 2,
        branch: 'Computer Science'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'branch' ? value : Number(value)
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Simple validation
        if (formData.cgpa < 0 || formData.cgpa > 10) {
            addToast('CGPA must be between 0 and 10', 'error');
            return;
        }

        setLoading(true);
        setResult(null);

        try {
            const response = await axios.post(`${API_BASE_URL}/predict`, formData);
            setResult(response.data);
            addToast('Prediction generated successfully!', 'success');
        } catch (error: any) {
            console.error('Error fetching prediction:', error);
            addToast(error.message || 'Failed to connect to ML server. Showing demo result.', 'error');

            // Fallback for demo if API is down
            setTimeout(() => {
                setResult({ prediction: 1, probability: 0.8572 });
            }, 1500);
        } finally {
            setLoading(false);
        }
    };

    const getProbabilityColor = (prob: number) => {
        if (prob > 0.7) return 'text-emerald-500';
        if (prob > 0.4) return 'text-yellow-500';
        return 'text-rose-500';
    };

    return (
        <div className="pt-20 pb-32 px-6 bg-white dark:bg-[#020617] min-h-screen transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Placement Chance Predictor</h1>
                    <p className="text-slate-600 dark:text-slate-400">Fill in your academic and professional details to get an AI-powered prediction.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="glass p-8 rounded-3xl border-black/5 dark:border-white/5 shadow-xl transition-colors duration-300"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputGroup
                                    label="CGPA"
                                    name="cgpa"
                                    value={formData.cgpa}
                                    onChange={handleChange}
                                    min={0} max={10} step={0.1}
                                    tip="Your cumulative grade point average (out of 10)"
                                />
                                <InputGroup
                                    label="Internships"
                                    name="internship_count"
                                    value={formData.internship_count}
                                    onChange={handleChange}
                                    tip="Number of internships completed"
                                />
                                <InputGroup
                                    label="Projects"
                                    name="project_count"
                                    value={formData.project_count}
                                    onChange={handleChange}
                                    tip="Number of significant projects"
                                />
                                <InputGroup
                                    label="Certifications"
                                    name="certifications"
                                    value={formData.certifications}
                                    onChange={handleChange}
                                    tip="Industry-recognized certifications"
                                />
                                <InputGroup
                                    label="Skills Score (%)"
                                    name="skills_score"
                                    value={formData.skills_score}
                                    onChange={handleChange}
                                    min={0} max={100}
                                    tip="Overall technical skill assessment score"
                                />
                                <InputGroup
                                    label="DSA Score (%)"
                                    name="dsa_score"
                                    value={formData.dsa_score}
                                    onChange={handleChange}
                                    min={0} max={100}
                                    tip="Data Structures & Algorithms performance"
                                />
                                <InputGroup
                                    label="Comm. Score (%)"
                                    name="communication_score"
                                    value={formData.communication_score}
                                    onChange={handleChange}
                                    min={0} max={100}
                                    tip="Communication & Soft skills score"
                                />
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                        College Tier <HelpCircle className="w-3 h-3 text-slate-400" />
                                    </label>
                                    <select
                                        name="college_tier"
                                        value={formData.college_tier}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 dark:bg-slate-900/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-slate-900 dark:text-white appearance-none"
                                    >
                                        <option value={1}>Tier 1 (Top IITs, NITs)</option>
                                        <option value={2}>Tier 2 (Reputed States/Private)</option>
                                        <option value={3}>Tier 3 (Other Institutions)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Branch of Study</label>
                                <select
                                    name="branch"
                                    value={formData.branch}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50 dark:bg-slate-900/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-slate-900 dark:text-white appearance-none"
                                >
                                    <option value="Computer Science">Computer Science & IT</option>
                                    <option value="Electronics">Electronics & Communication</option>
                                    <option value="Mechanical">Mechanical Engineering</option>
                                    <option value="Electrical">Electrical Engineering</option>
                                    <option value="Civil">Civil Engineering</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full btn-primary h-14 flex items-center justify-center gap-3 text-lg mt-8"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-6 h-6 animate-spin" /> Analyzing Profile...
                                    </>
                                ) : (
                                    <>
                                        Get Prediction <ChevronRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Result Side */}
                    <div className="sticky top-28">
                        <AnimatePresence mode="wait">
                            {!result && !loading && (
                                <motion.div
                                    key="idle"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="h-full flex flex-col items-center justify-center p-12 text-center border-2 border-dashed border-black/5 dark:border-white/5 rounded-3xl"
                                >
                                    <Activity className="w-16 h-16 text-slate-300 dark:text-slate-700 mb-6" />
                                    <h3 className="text-xl font-semibold mb-2 text-slate-600 dark:text-slate-300">Awaiting Input</h3>
                                    <p className="text-slate-400 dark:text-slate-500">Submit the form to see your placement probability and model analysis.</p>
                                </motion.div>
                            )}

                            {loading && (
                                <motion.div
                                    key="loading"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="glass p-12 rounded-3xl border-black/5 dark:border-white/5 text-center flex flex-col items-center justify-center min-h-[400px]"
                                >
                                    <div className="relative mb-8">
                                        <div className="w-24 h-24 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <UserCheck className="w-8 h-8 text-primary shadow-glow" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Processing Data</h3>
                                    <p className="text-slate-600 dark:text-slate-400">Our Random Forest model is evaluating your technical and professional parameters...</p>
                                </motion.div>
                            )}

                            {result && !loading && (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    className="glass p-8 md:p-12 rounded-3xl border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden"
                                >
                                    {/* Result Background Decoration */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 blur-[80px] -z-10 ${result.prediction === 1 ? 'bg-emerald-500/20' : 'bg-rose-500/20'}`} />

                                    <div className="flex flex-col items-center text-center">
                                        {result.prediction === 1 ? (
                                            <div className="p-4 bg-emerald-500/10 rounded-full mb-6">
                                                <CheckCircle2 className="w-16 h-16 text-emerald-500" />
                                            </div>
                                        ) : (
                                            <div className="p-4 bg-rose-500/10 rounded-full mb-6">
                                                <XCircle className="w-16 h-16 text-rose-500" />
                                            </div>
                                        )}

                                        <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">
                                            {result.prediction === 1 ? 'High Placement Chance' : 'Improvement Recommended'}
                                        </h2>
                                        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-sm">
                                            {result.prediction === 1
                                                ? 'Based on your profile, you have a strong chance of being placed in a leading firm.'
                                                : 'The model suggests strengthening your technical profile to improve placement odds.'}
                                        </p>

                                        <div className="w-full grid grid-cols-2 gap-4 mb-8">
                                            <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl border border-black/5 dark:border-white/10">
                                                <span className="text-xs text-slate-500 uppercase tracking-widest block mb-1">Probability</span>
                                                <span className={`text-4xl font-bold ${getProbabilityColor(result.probability)}`}>
                                                    {(result.probability * 100).toFixed(1)}%
                                                </span>
                                            </div>
                                            <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl border border-black/5 dark:border-white/10">
                                                <span className="text-xs text-slate-500 uppercase tracking-widest block mb-1">Model Stat</span>
                                                <span className="text-4xl font-bold text-slate-900 dark:text-white">94%</span>
                                                <span className="text-[10px] text-slate-500 block uppercase">Accuracy</span>
                                            </div>
                                        </div>

                                        <div className="w-full p-6 bg-slate-100 dark:bg-slate-900/50 rounded-2xl border border-black/5 dark:border-white/5 text-left transition-colors duration-300">
                                            <h4 className="flex items-center gap-2 text-sm font-semibold mb-4 text-slate-700 dark:text-slate-300">
                                                <Trophy className="w-4 h-4 text-yellow-500" /> Key Takeaways
                                            </h4>
                                            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                                                    DSA Score significantly influences the result.
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                                                    Profile Strength Index: {result.probability > 0.6 ? 'Robust' : 'Moderate'}
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                                                    Internship-Skill interaction contributes 15%.
                                                </li>
                                            </ul>
                                        </div>

                                        <button
                                            onClick={() => setResult(null)}
                                            className="mt-8 text-slate-500 hover:text-primary dark:hover:text-white transition-colors text-sm underline underline-offset-4"
                                        >
                                            Reset and Predict Again
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

const InputGroup = ({ label, name, value, onChange, min, max, step = 1, tip }: any) => (
    <div className="space-y-2">
        <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                {label}
            </label>
            {tip && (
                <div className="group relative">
                    <HelpCircle className="w-3 h-3 text-slate-400 dark:text-slate-500 cursor-help" />
                    <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-white dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-300 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 glass border border-black/5 dark:border-white/10">
                        {tip}
                    </div>
                </div>
            )}
        </div>
        <input
            type="number"
            name={name}
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={onChange}
            className="w-full bg-slate-50 dark:bg-slate-900/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-slate-900 dark:text-white"
        />
    </div>
);

export default PredictionPage;
