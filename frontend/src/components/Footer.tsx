import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#020617] border-t border-white/5 pt-16 pb-8 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-xl font-bold text-white">AI Placement Intelligence</span>
                    </div>
                    <p className="text-slate-400 max-w-md mb-6">
                        An end-to-end Machine Learning solution designed to predict student placement opportunities based on multi-dimensional academic and technical data.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors text-white">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors text-white">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors text-white">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Project</h4>
                    <ul className="flex flex-col gap-2 text-slate-400">
                        <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Data Analysis</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Model Training</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Support</h4>
                    <ul className="flex flex-col gap-2 text-slate-400">
                        <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/5 pt-8 text-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} AI Placement Intelligence System. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
