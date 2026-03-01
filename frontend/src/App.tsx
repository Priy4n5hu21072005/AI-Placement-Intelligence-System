import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import PredictionPage from './pages/PredictionPage';
import InsightsPage from './pages/InsightsPage';

function App() {
    return (
        <ThemeProvider>
            <ToastProvider>
                <Router>
                    <div className="flex flex-col min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-50 transition-colors duration-300">
                        <Navbar />
                        <main className="flex-grow">
                            <Routes>
                                <Route path="/" element={<LandingPage />} />
                                <Route path="/predict" element={<PredictionPage />} />
                                <Route path="/insights" element={<InsightsPage />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </Router>
            </ToastProvider>
        </ThemeProvider>
    );
}

export default App;
