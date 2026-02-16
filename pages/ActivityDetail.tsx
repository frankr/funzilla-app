import React from 'react';
import { useNavigate } from 'react-router-dom';

const ActivityDetail: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-full w-full bg-white relative">
            {/* Hero Header */}
            <header className="relative w-full h-[280px] shrink-0">
                <div className="absolute inset-0 bg-slate-200 rounded-b-[32px] overflow-hidden">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY2Uu8LuwQpf4KnaI0i2amIbhoznsdIymgxrQSeqJh6d7WCfIfbYMF53HX0xYoDhGClgRkIRn6Tk1MqaHo1enNtxuAOkBnuEVRIBoc3nbKH0GaUlfBCGDWY_5w8jXLZe0YY4kqzEuXaeH5nbmacYvKrljh-dXmPE1kIrwhAHulqyWx-IHZB_NErliGXuPY4tjZVPmBDDVxs1O3tdyvUl680zKjdPoaY9XtVMlUzE-dZ4A1NPHCIZMUFYh6x7lPKYBEYLfR4qhYmpMs" alt="Hero" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <div className="absolute top-0 w-full p-4 pt-12 flex justify-between items-start">
                    <button onClick={() => navigate(-1)} className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors group">
                         <span className="material-symbols-outlined">favorite</span>
                    </button>
                </div>
            </header>

            {/* Content */}
            <main className="flex-1 px-5 -mt-6 relative z-10 pb-28 overflow-y-auto no-scrollbar">
                {/* Title Card */}
                <div className="bg-white rounded-xl shadow-sm p-5 mb-6 border border-slate-100">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-slate-900 leading-tight">Junior Science Exploratorium</h1>
                            <p className="text-sm font-medium text-slate-500 mt-1">Museum & Education</p>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg">
                                <span className="material-symbols-outlined text-green-600 text-[18px] filled">star</span>
                                <span className="text-sm font-bold text-slate-900">4.8</span>
                            </div>
                            <span className="text-xs text-slate-400 mt-1">124 reviews</span>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="flex flex-col items-center justify-center bg-slate-50 p-3 rounded-2xl border border-slate-100">
                        <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-2">
                            <span className="material-symbols-outlined">child_care</span>
                        </div>
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Ages</span>
                        <span className="text-sm font-bold text-slate-900">3-8 yrs</span>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-slate-50 p-3 rounded-2xl border border-slate-100">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2">
                            <span className="material-symbols-outlined">payments</span>
                        </div>
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Price</span>
                        <span className="text-sm font-bold text-slate-900">$$</span>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-slate-50 p-3 rounded-2xl border border-slate-100">
                         <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
                            <span className="material-symbols-outlined">distance</span>
                        </div>
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Distance</span>
                        <span className="text-sm font-bold text-slate-900">1.2 mi</span>
                    </div>
                </div>

                {/* Membership */}
                <div className="relative overflow-hidden bg-primary/10 rounded-2xl p-5 mb-6 border border-primary/20">
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
                    <div className="relative flex items-center justify-between gap-4">
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1">Funzinga Members save $5 on entry</h3>
                            <p className="text-sm text-slate-600">Join today for exclusive perks.</p>
                        </div>
                        <button className="shrink-0 bg-primary hover:bg-sky-600 text-white text-sm font-bold py-2.5 px-5 rounded-full shadow-lg shadow-primary/30 transition-all active:scale-95">
                            Join Now
                        </button>
                    </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-3">About this activity</h2>
                    <p className="text-slate-600 leading-relaxed text-[15px]">
                        Ignite your child's curiosity with over 50 hands-on exhibits designed specifically for early learners. From water play stations to giant building blocks, the Junior Science Exploratorium offers a safe and engaging environment for kids to discover the wonders of physics and biology.
                    </p>
                    <button className="mt-2 text-primary font-semibold text-sm hover:underline flex items-center gap-1">
                        Read more <span className="material-symbols-outlined text-[16px]">expand_more</span>
                    </button>
                </div>

                 {/* Amenities */}
                 <div className="mb-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-3">Amenities</h2>
                    <div className="flex flex-wrap gap-3">
                        {['Stroller Friendly', 'Cafe On-site', 'Accessible', 'Free WiFi'].map((item, i) => (
                             <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">
                                <span className="material-symbols-outlined text-[16px]">check</span> {item}
                             </span>
                        ))}
                    </div>
                 </div>

                 {/* Location */}
                 <div className="mb-2">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="text-lg font-bold text-slate-900">Location</h2>
                        <a href="#" className="text-primary text-sm font-semibold hover:underline">View on map</a>
                    </div>
                    <div className="rounded-xl overflow-hidden h-40 w-full relative group cursor-pointer">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYDZN_x0gqEezuU5WZ286eet8GnGPkBqSvCgODpnBYll8sHiOYogYFSVD1gLAaw-J2Pwox0_G9g1YgEnwPOpSqnPjWaEfLBBYbnv_cI6t8sZMqxH_futCh0Bq9rQV3w0LAM8MUu1nboF6oHaQ00j6p-aT1K9NTO2L8rT_K57zd5486JC7n_yLa0aU1_JObHWTo41osAqSWDO7bb8U4Ill7_dXqeddPw8hTPaUmaISWzMOdVSMJq17ND1Og-xmy3-LfK_QsCDK9eS38" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="map" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
                            <span className="material-symbols-outlined">location_on</span>
                        </div>
                    </div>
                    <p className="text-sm text-slate-500 mt-2">123 Discovery Way, Science City, CA 90210</p>
                 </div>
            </main>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-200 p-4 pb-8 z-50">
                <div className="flex gap-3">
                     <button className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-3.5 px-4 rounded-xl transition-colors">
                        <span className="material-symbols-outlined text-[20px]">directions</span>
                        <span className="text-sm">Directions</span>
                     </button>
                     <button className="flex-[2] flex items-center justify-center gap-2 bg-primary hover:bg-sky-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-primary/30 transition-all active:scale-95">
                        <span className="text-sm">Book Ticket • $15</span>
                     </button>
                </div>
            </div>
        </div>
    );
};

export default ActivityDetail;