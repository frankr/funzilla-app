import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchMap: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex h-full w-full flex-col overflow-hidden bg-white">
             {/* Map Background Layer */}
            <div className="absolute inset-0 z-0 w-full h-full bg-slate-200">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8DzuLxTXAE4p0mMgIabVwrs3jJ5Beb7ArmQtj6Cb7aPlWEuiSs4nT8P0HocU9vvaWAoXRq7jNn4i6dpjiR4EqwF4rCX2_OJt66SqOlBoMTqucCxCr72k4w3o9zieSW7XlnrKmAr3zWVk5YgLrhrs1ZCT-iQ8ciy00I2AU0Mn3hCJ7E4QlkdO6KyuqgayPynh3SwehmZUIa3s0_7_oqZxUtL2W3odUTF6c8A8xFyqRUJ-vNiLICVQ0TT-B8dC4K3FCuBW1hT_P35-s" alt="Map" className="w-full h-full object-cover opacity-80" />
                 
                 {/* Active Pin */}
                <div className="absolute top-[45%] left-[45%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-20 cursor-pointer group" onClick={() => navigate('/detail')}>
                    <div className="bg-white px-3 py-1.5 rounded-lg shadow-lg mb-1 whitespace-nowrap opacity-100 transition-opacity">
                        <span className="text-xs font-bold text-slate-800">Brooklyn Children's Museum</span>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-xl border-4 border-white text-white z-10 transform transition-transform group-hover:scale-110">
                            <span className="material-symbols-outlined text-[24px]">museum</span>
                        </div>
                        <div className="absolute w-full h-full bg-primary rounded-full opacity-30 animate-ping"></div>
                    </div>
                    <div className="w-0.5 h-4 bg-primary rounded-full mt-[-2px]"></div>
                    <div className="w-4 h-1.5 bg-black/20 rounded-full blur-[1px]"></div>
                </div>

                 {/* Inactive Pins */}
                <div className="absolute top-[30%] left-[70%] flex flex-col items-center gap-1 z-10 cursor-pointer opacity-90">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-slate-200 text-slate-600">
                        <span className="material-symbols-outlined text-[20px]">park</span>
                    </div>
                </div>
            </div>

            {/* Top UI */}
            <div className="relative z-30 pt-12 px-4 pb-4 bg-gradient-to-b from-white/90 via-white/60 to-transparent pointer-events-none">
                <div className="pointer-events-auto">
                    {/* Search Bar */}
                    <div className="w-full relative shadow-lg rounded-xl mb-4 group focus-within:ring-2 focus-within:ring-primary/50 transition-all bg-white">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-primary">search</span>
                        </div>
                        <input type="text" className="block w-full pl-11 pr-4 py-3.5 bg-transparent border-none text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0 text-base font-medium" placeholder="Search activities..." defaultValue="Dinosaur exhibits" />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <button className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 transition-colors">
                                <span className="material-symbols-outlined text-[20px]">close</span>
                            </button>
                        </div>
                    </div>

                    {/* Pills */}
                    <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar -mx-4 px-4 mask-linear-fade">
                        <button className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-white shadow-md font-medium text-sm">
                            <span className="material-symbols-outlined text-[18px]">grid_view</span> All
                        </button>
                        <button className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-slate-700 shadow-sm border border-slate-100 font-medium text-sm hover:bg-slate-50">
                            <span className="material-symbols-outlined text-[18px] text-green-500">park</span> Parks
                        </button>
                        <button className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-slate-700 shadow-sm border border-slate-100 font-medium text-sm hover:bg-slate-50">
                            <span className="material-symbols-outlined text-[18px] text-blue-500">museum</span> Museums
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex-1"></div>

            {/* Bottom Card */}
            <div className="relative z-30 p-4 pb-24">
                <div 
                    onClick={() => navigate('/detail')}
                    className="bg-white rounded-t-2xl rounded-b-xl shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4 transform transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
                >
                    <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-4"></div>
                    <div className="flex gap-4">
                        <div className="w-24 h-24 flex-shrink-0 rounded-lg bg-cover bg-center shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtFz5ulhXqBjvk2E2yF58cVdrOoLIm3A60fqse564KgBvH56AIiGeyzJlU2Ski5BCSUkL6s2MYUOjfBEUU-z_yZkqdt7afV2pJmp25e6YXyxRiSC7hA3PH94QlbODM5wJEEYr024aL02ONQHLtRiGrQ-u3nbWtwbaUF8AlngEdW8tmVY3OVZaYm0Kmai6Wr-Z1uRPnVPoMZyigEMbwr7o7WB5Fa-2odlJrAn-JfSv6As6nBHVfr0bWJ0cOig8NOtU99pp88mUO7RfS')" }}></div>
                        <div className="flex flex-col flex-1 justify-between py-0.5">
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-bold text-slate-900 leading-tight">Brooklyn Children's Museum</h3>
                                    <button className="text-slate-400 hover:text-red-500">
                                        <span className="material-symbols-outlined text-[24px]">favorite</span>
                                    </button>
                                </div>
                                <div className="flex items-center gap-1 mt-1 text-sm">
                                    <span className="material-symbols-outlined text-yellow-400 text-[18px] filled">star</span>
                                    <span className="font-bold text-slate-900">4.8</span>
                                    <span className="text-slate-500">(1.2k)</span>
                                    <span className="text-slate-300 mx-1">•</span>
                                    <span className="text-green-600 font-medium">Open</span>
                                </div>
                                <div className="text-xs text-slate-500 mt-1 flex items-center gap-3">
                                    <span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[14px]">payments</span> $$</span>
                                    <span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[14px]">child_care</span> Ages 2-10</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mt-4 pt-3 border-t border-slate-100">
                         <div className="flex flex-col">
                            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Distance</span>
                            <div className="flex items-center gap-1 text-slate-800 font-semibold">
                                <span className="material-symbols-outlined text-primary text-[18px]">near_me</span> 8 mins away
                            </div>
                         </div>
                         <button className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98]">
                            <span>Get Directions</span>
                            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                         </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchMap;