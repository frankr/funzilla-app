import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-[-50px] left-[-80px] w-64 h-64 rounded-full bg-mint-accent blur-3xl opacity-60 z-0"></div>
        <div className="absolute bottom-[20%] right-[-100px] w-72 h-72 rounded-full bg-orange-accent blur-3xl opacity-60 z-0"></div>

        {/* Header */}
        <header className="relative z-10 flex w-full items-center justify-center px-6 pt-12 pb-4">
            <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-3xl font-bold">explore</span>
                <h2 className="text-slate-900 text-2xl font-extrabold tracking-tight">Funzilla</h2>
            </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 flex flex-1 flex-col px-6">
            <div className="relative mt-2 flex-1 flex flex-col justify-center">
                 {/* Decorative Icons */}
                <div className="absolute -top-4 -right-2 text-orange-accent animate-pulse z-20">
                    <span className="material-symbols-outlined text-4xl font-bold">spark</span>
                </div>
                <div className="absolute -bottom-6 -left-4 text-mint-accent z-20">
                    <span className="material-symbols-outlined text-5xl filled">star</span>
                </div>
                
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] overflow-hidden shadow-lg bg-slate-100 rounded-[2.5rem] group">
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVHHiNzsIplibLvqICbNcr7Gp2GQctvHBDFff5BQPHs2McP31Lsk84kNb37jfPYQ38m1XoGK2oUfu2Kiw435v8tKlg2xC2wMXA6bkV8eOrpOHudsv90RhIsk7gxeKIfWTvUH8Pv5H79WTpWXoyH-msFuWKf1G2bSXvO_tedHipxKimUCQLZpCwe5c8IweLFzc2gDS43nY_yUUiCCrprPZpcfiKTjFJ4aNDa8i138xCIAD8qZmP-vcn9LFuqKTLjiC38eV-SGdjON80" 
                        alt="Father and daughter" 
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                </div>
            </div>

            <div className="flex flex-col items-center pt-8 pb-4 text-center">
                <h1 className="text-slate-900 text-[34px] font-extrabold leading-[1.1] tracking-tight mb-3">
                    Weekends,<br/>
                    <span className="text-primary">simplified.</span>
                </h1>
                <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-[280px]">
                    Discover activities your kids will actually love.
                </p>
            </div>
        </main>

        {/* Footer Actions */}
        <footer className="relative z-10 px-6 pb-8 pt-2">
            <button 
                onClick={() => navigate('/interests')}
                className="group relative flex w-full items-center justify-center overflow-hidden rounded-full bg-primary py-4 text-white shadow-lg shadow-primary/30 transition-all hover:shadow-primary/50 active:scale-[0.98]"
            >
                <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100"></span>
                <span className="text-lg font-bold tracking-wide mr-2">Get Started</span>
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
            <div className="mt-4 text-center">
                <p className="text-sm font-medium text-slate-400">
                    Already have an account? 
                    <a href="#" className="text-slate-800 hover:text-primary transition-colors font-bold ml-1">Log in</a>
                </p>
            </div>
        </footer>
    </div>
  );
};

export default Welcome;