import { motion } from 'framer-motion';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    LineChart,
    Line,
    Legend
} from 'recharts';
import {
    ShieldCheck,
    Target,
    RefreshCw,
    Settings2,
    AlertTriangle,
    Zap,
    CheckCircle2
} from 'lucide-react';

const InsightsPage = () => {
    // Mock Data based on typical ML evaluation
    const featureImportance = [
        { name: 'CGPA', value: 0.28 },
        { name: 'DSA Score', value: 0.22 },
        { name: 'Internships', value: 0.18 },
        { name: 'Projects', value: 0.12 },
        { name: 'Skills Score', value: 0.10 },
        { name: 'Comm. Score', value: 0.06 },
        { name: 'Certifications', value: 0.04 },
    ].sort((a, b) => b.value - a.value);

    const classDistribution = [
        { name: 'Placed', value: 65, color: '#6366f1' },
        { name: 'Not Placed', value: 35, color: '#f43f5e' },
    ];

    const modelMetrics = [
        { name: 'Accuracy', value: 94.2 },
        { name: 'Precision', value: 92.8 },
        { name: 'Recall', value: 95.1 },
        { name: 'F1 Score', value: 93.9 },
    ];

    const trainingHistory = [
        { epoch: 1, accuracy: 72, loss: 0.65 },
        { epoch: 2, accuracy: 78, loss: 0.52 },
        { epoch: 3, accuracy: 83, loss: 0.41 },
        { epoch: 4, accuracy: 88, loss: 0.32 },
        { epoch: 5, accuracy: 91, loss: 0.25 },
        { epoch: 6, accuracy: 93, loss: 0.19 },
        { epoch: 7, accuracy: 94.2, loss: 0.15 },
    ];

    return (
        <div className="pt-20 pb-32 px-6 bg-white dark:bg-[#020617] min-h-screen transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Model & Data Insights</h1>
                    <p className="text-slate-600 dark:text-slate-400">Deep dive into the performance metrics and feature architecture of our Random Forest classifier.</p>
                </div>

                {/* Top Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    {modelMetrics.map((metric) => (
                        <motion.div
                            key={metric.name}
                            whileHover={{ y: -5 }}
                            className="glass p-6 rounded-2xl border-black/5 dark:border-white/5 transition-colors"
                        >
                            <span className="text-xs text-slate-500 uppercase tracking-widest mb-2 block">{metric.name}</span>
                            <div className="flex items-end justify-between">
                                <span className="text-3xl font-bold text-slate-900 dark:text-white">{metric.value}%</span>
                                <div className="p-2 bg-emerald-500/10 rounded-lg">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                </div>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-4 overflow-hidden">
                                <div
                                    className="bg-primary h-full rounded-full"
                                    style={{ width: `${metric.value}%` }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Feature Importance */}
                    <div className="lg:col-span-2 glass p-8 rounded-3xl border-black/5 dark:border-white/5 order-2 lg:order-1 transition-colors">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
                                <Settings2 className="w-5 h-5 text-primary" /> Feature Importance
                            </h3>
                            <span className="text-xs text-slate-500 italic">Determined via Random Forest Index</span>
                        </div>

                        <div className="h-[400px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={featureImportance} layout="vertical" margin={{ left: 40, right: 40 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" dark-stroke="#1e293b" horizontal={false} />
                                    <XAxis type="number" hide />
                                    <YAxis
                                        dataKey="name"
                                        type="category"
                                        stroke="#64748b"
                                        fontSize={12}
                                        tickLine={false}
                                        width={100}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                            border: '1px solid #e2e8f0',
                                            borderRadius: '8px',
                                            backdropFilter: 'blur(10px)'
                                        }}
                                        itemStyle={{ color: '#6366f1' }}
                                    />
                                    <Bar dataKey="value" fill="#6366f1" radius={[0, 4, 4, 0]} barSize={20} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Class Distribution */}
                    <div className="glass p-8 rounded-3xl border-black/5 dark:border-white/5 order-1 lg:order-2 transition-colors">
                        <h3 className="text-xl font-bold flex items-center gap-2 mb-8 text-slate-900 dark:text-white">
                            <Target className="w-5 h-5 text-accent" /> Class Distribution
                        </h3>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={classDistribution}
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={10}
                                        dataKey="value"
                                    >
                                        {classDistribution.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                            border: '1px solid #e2e8f0',
                                            borderRadius: '8px'
                                        }}
                                    />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="mt-8 space-y-4">
                            <div className="flex items-center justify-between p-3 bg-black/5 dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/5 transition-colors">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-primary" />
                                    <span className="text-sm text-slate-600 dark:text-slate-400">Total Samples</span>
                                </div>
                                <span className="font-bold text-slate-900 dark:text-white">12,480</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-black/5 dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/5 transition-colors">
                                <div className="flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                                    <span className="text-sm text-slate-600 dark:text-slate-400">Balancing Mode</span>
                                </div>
                                <span className="text-xs font-mono bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 px-2 py-1 rounded">SMOTE</span>
                            </div>
                        </div>
                    </div>

                    {/* Performance Trend */}
                    <div className="lg:col-span-3 glass p-8 rounded-3xl border-black/5 dark:border-white/5 order-3 transition-colors">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
                                <RefreshCw className="w-5 h-5 text-emerald-500" /> Model Convergence
                            </h3>
                            <div className="flex gap-4">
                                <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                    <div className="w-3 h-0.5 bg-primary" /> Accuracy
                                </span>
                                <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                    <div className="w-3 h-0.5 bg-accent" /> Loss
                                </span>
                            </div>
                        </div>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={trainingHistory}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" dark-stroke="#1e293b" />
                                    <XAxis dataKey="epoch" stroke="#64748b" fontSize={12} tickLine={false} label={{ value: 'Epochs', position: 'insideBottom', offset: -5 }} />
                                    <YAxis stroke="#64748b" fontSize={12} tickLine={false} />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                            border: '1px solid #e2e8f0',
                                            borderRadius: '8px'
                                        }}
                                    />
                                    <Line type="monotone" dataKey="accuracy" stroke="#6366f1" strokeWidth={3} dot={{ fill: '#6366f1' }} />
                                    <Line type="monotone" dataKey="loss" stroke="#f43f5e" strokeWidth={2} dot={false} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Extra Technical Details */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Built for Reliability</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="p-3 bg-primary/10 rounded-xl h-fit">
                                    <Zap className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1 text-slate-900 dark:text-white">Low Latency Inference</h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">Response time under 50ms powered by optimized FastAPI backend and pre-computed features.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="p-3 bg-accent/10 rounded-xl h-fit">
                                    <ShieldCheck className="text-accent w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1 text-slate-900 dark:text-white">Robust Preprocessing</h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">Incoming data passes through strict Pydantic validation and internal normalization pipelines.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-1 overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300">
                        <div className="bg-white dark:bg-[#020617] rounded-[22px] p-8 h-full transition-colors">
                            <h4 className="font-mono text-primary text-sm mb-4"># Internal Pipeline Logic</h4>
                            <pre className="text-sm text-slate-600 dark:text-slate-400 font-mono overflow-x-auto p-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-black/5 dark:border-white/5">
                                {`def profile_index(df):
    return (
        0.25 * df["cgpa_norm"] +
        0.20 * df["internship_norm"] +
        0.20 * df["project_norm"] +
        0.15 * df["skills_norm"] +
        0.10 * df["comm_norm"] +
        0.10 * df["cert_norm"]
    )`}
                            </pre>
                            <p className="mt-6 text-xs text-slate-500 italic">
                                Our proprietary Profile Strength Index combines multiple normalized metrics to capture the holistic quality of a candidate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InsightsPage;
