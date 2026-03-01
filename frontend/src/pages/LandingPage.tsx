import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    BarChart3,
    Code2,
    Cpu,
    Database,
    Layers,
    ShieldCheck,
    Zap
} from 'lucide-react';

const LandingPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const techStack = [
        { name: 'Python', icon: <Code2 className="text-yellow-500" /> },
        { name: 'Scikit-learn', icon: <Layers className="text-orange-500" /> },
        { name: 'Pandas', icon: <Database className="text-blue-500" /> },
        { name: 'FastAPI', icon: <Zap className="text-emerald-500" /> },
        { name: 'React', icon: <Cpu className="text-cyan-400" /> },
        { name: 'Tailwind CSS', icon: <BarChart3 className="text-sky-400" /> },
    ];

    return (
        <div className="overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 px-6 overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-accent/10 blur-[100px] rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6 inline-block">
                            Powered by Advanced Machine Learning
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-slate-900 dark:text-white">
                            Predict Your Career <br />
                            <span className="text-gradient">With AI Precision</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Empower your placement journey with data-driven insights. Our system analyzes over 27 parameters to calculate your placement probability and identifies key areas for improvement.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link to="/predict" className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center">
                                Try Model Now <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link to="/insights" className="btn-outline w-full sm:w-auto justify-center border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                                View Model Analysis
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mt-20 relative px-4"
                    >
                        <div className="glass rounded-2xl p-4 md:p-8 max-w-4xl mx-auto shadow-2xl relative border-black/5 dark:border-white/5">
                            <div className="absolute -top-4 -right-4 bg-accent p-3 rounded-xl animate-float">
                                <Zap className="text-white w-6 h-6" />
                            </div>
                            {/* Mockup Dashboard Image Placeholder */}
                            <div className="bg-slate-100 dark:bg-slate-900/50 rounded-xl aspect-[16/9] flex items-center justify-center border border-black/5 dark:border-white/5 overflow-hidden">
                                <div className="text-slate-300 dark:text-slate-600 text-6xl font-bold opacity-20">PLATFORM DASHBOARD</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-20 bg-slate-50 dark:bg-slate-950/50 border-y border-black/5 dark:border-white/5 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-2xl font-semibold mb-12 text-slate-600 dark:text-slate-300">Driven by Industry Leading Tech</h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
                    >
                        {techStack.map((tech) => (
                            <motion.div key={tech.name} variants={itemVariants} className="flex flex-col items-center gap-2">
                                <div className="p-3 bg-white dark:bg-slate-900 border border-black/5 dark:border-white/5 rounded-xl text-2xl shadow-sm">
                                    {tech.icon}
                                </div>
                                <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">{tech.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Production-Grade Intelligence</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">This isn't just a project. It's a complete ML engineering showcase from data cleaning to live inference.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="glass p-8 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-black/5 dark:border-white/5 group">
                            <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <Database className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Cleaned & Merged</h3>
                            <p className="text-slate-600 dark:text-slate-400">Processed multiple Kaggle datasets with rigorous data cleaning and handling of missing values for maximum reliability.</p>
                        </div>

                        <div className="glass p-8 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-black/5 dark:border-white/5 group">
                            <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                                <BarChart3 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Class Balanced</h3>
                            <p className="text-slate-600 dark:text-slate-400">Applied advanced resampling techniques (SMOTE/Random Oversampling) to ensure the model isn't biased towards specific outcomes.</p>
                        </div>

                        <div className="glass p-8 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-black/5 dark:border-white/5 group">
                            <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center mb-6 text-emerald-500 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">27 Engineered Features</h3>
                            <p className="text-slate-600 dark:text-slate-400">Utilizes complex feature engineering including profile strength index and technical interaction scores for high-fidelity predictions.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
