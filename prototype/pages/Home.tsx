import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [activeCtx, setActiveCtx] = useState<'family' | 'leo' | 'mia'>('family');

  const navToDetail = () => navigate('/detail');

  return (
    <div className="flex flex-col h-full bg-surface-light relative">
      {/* Header Section */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100 px-5 pt-12 pb-4">
        <div className="flex items-center justify-between mb-4">
            <button className="flex items-center gap-1 text-slate-900 group">
                <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
                <span className="text-lg font-bold tracking-tight">Brooklyn, NY</span>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-[20px]">expand_more</span>
            </button>
            <div className="relative">
                <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-slate-100">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgfHuhJuTtFWo0R2yZYn6ocfi5K0uNBq7oKsQ99zMLTUxjb2-aUZHJNed76w2Q3EGEVZBPdWXr6KL69HDg8xHjjBsvM1O6JhkTu0E4PMfqkTE3kIvYJZNGMfTlEzRQhTwlXsc0i2FyUlDc9OWBWpcnwmBCWAfhhNQmF_kEr6WktUEUzX3yvFVpRNeDRC9_HRkSwG4adjg6czNzsCFXLmP390Olw3c0BsTuoL0cVMVhjYmSppVwngXQDlKVGyavET8GnzWxys6g5p2Y" alt="Profile" className="h-full w-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 flex h-5 w-9 items-center justify-center rounded-full bg-secondary-orange text-[10px] font-bold text-white shadow-sm ring-2 ring-white">PRO</div>
            </div>
        </div>
        {/* Toggle */}
        <div className="w-full rounded-2xl bg-slate-100 p-1">
            <div className="relative flex w-full">
                <button 
                    onClick={() => setActiveCtx('family')}
                    className={`flex-1 rounded-xl py-2.5 text-center text-sm font-semibold transition-all ${activeCtx === 'family' ? 'bg-white text-primary shadow-sm' : 'text-slate-500'}`}
                >
                    Family
                </button>
                <button 
                    onClick={() => setActiveCtx('leo')}
                    className={`flex-1 rounded-xl py-2.5 text-center text-sm font-semibold transition-all ${activeCtx === 'leo' ? 'bg-white text-primary shadow-sm' : 'text-slate-500'}`}
                >
                    Leo
                </button>
                <button 
                    onClick={() => setActiveCtx('mia')}
                    className={`flex-1 rounded-xl py-2.5 text-center text-sm font-semibold transition-all ${activeCtx === 'mia' ? 'bg-white text-primary shadow-sm' : 'text-slate-500'}`}
                >
                    Mia
                </button>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {/* Top 5 Section */}
        <section className="mt-6 pl-5">
            <div className="mb-4 flex items-end justify-between pr-5">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Top 5 for You</h2>
                    <p className="text-sm text-slate-500">Curated based on your interests</p>
                </div>
                <a href="#" className="text-sm font-semibold text-primary">See All</a>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-6 pr-5 no-scrollbar snap-x snap-mandatory">
                {/* Card 1 */}
                <div onClick={navToDetail} className="relative min-w-[280px] snap-center rounded-2xl bg-white shadow-sm border border-slate-100 overflow-hidden group active:scale-[0.98] transition-transform cursor-pointer">
                    <div className="h-40 w-full bg-slate-200 relative overflow-hidden">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuASGmSTE3bn2lIzEU-0LnRsaeFObH570GvuHRPqFmlzom9M3mvZJbHIdCbvWx6ReUedxZ3xKcIiZX6xke_tipe1CIW7TvZWnkFYjmRFYqR1N-uMZDxnvl3miYqyCCAVrUlMh0ufSjIPz6Ua-Abi07-WL8WdR_8zBd_mgpI8cBvKCia7qmgjyOPfy53wwQpM0ApT5y45q3nMw9psT-utycq-N-rtW1NNf-YhEk7Ex4TZND_A_GAB4lLZekhvJTnOT9VsKAoDmk8RK4Du" className="h-full w-full object-cover" alt="Dino" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-br-2xl bg-primary text-xl font-bold text-white shadow-lg">1</div>
                        <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-primary backdrop-blur-sm">
                            <span className="material-symbols-outlined text-[14px]">star</span> 98% Match
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-bold text-slate-900 leading-tight">Dino Dig at Museum</h3>
                        <div className="mt-2 flex items-center text-sm text-slate-500">
                            <span className="material-symbols-outlined mr-1 text-[16px]">calendar_today</span>
                            <span>Sat, 10:00 AM</span>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="relative min-w-[280px] snap-center rounded-2xl bg-white shadow-sm border border-slate-100 overflow-hidden group">
                     <div className="h-40 w-full bg-slate-200 relative overflow-hidden">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJYJlUA-UHHFZwssxpEGdSF8Uk5Y06EbZC2XbXtGuEdcVRa4dJ1ubFmqHBm3ArJoHyN-yl3yo3Hl3EXIWfJSQ2AfeCMJSGgBMyElfGs72rL_ev2WHJ5JMGuHQJD-lkeUsL_tuVrAEkIpwwZbKDxcDmGqAE5IHtXBQMaEVolUbJVXbmFq-ddKPkq7EnCh2AIjtS10snusqU4LfAVGKRuyTtWtuidD04VSnDP13HSAePtRgpTU77ZctI7NVHLpL0EoK1VXWgjgmzkoTf" className="h-full w-full object-cover" alt="Splash" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-br-2xl bg-slate-800 text-xl font-bold text-white shadow-lg">2</div>
                        <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-secondary-orange px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
                             <span className="material-symbols-outlined text-[14px]">local_fire_department</span> Trending
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-bold text-slate-900 leading-tight">Splash Pad Opening</h3>
                        <div className="mt-2 flex items-center text-sm text-slate-500">
                            <span className="material-symbols-outlined mr-1 text-[16px]">calendar_today</span>
                            <span>Sun, 11:00 AM</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Filters */}
        <div className="sticky top-[138px] z-30 flex items-center gap-2 overflow-x-auto bg-background-light py-3 pl-5 pr-5 no-scrollbar border-b border-slate-100">
             <button className="flex shrink-0 items-center gap-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm active:scale-95 transition-transform">
                Price <span className="material-symbols-outlined text-[18px]">expand_more</span>
             </button>
             <button className="flex shrink-0 items-center gap-1 rounded-full border border-slate-200 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary shadow-sm active:scale-95 transition-transform">
                Age: 4-6 <span className="material-symbols-outlined text-[18px]">close</span>
             </button>
             <button className="flex shrink-0 items-center gap-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm active:scale-95 transition-transform">
                Indoor
             </button>
        </div>

        {/* Feed List */}
        <div className="px-5 mt-6 mb-4 flex items-center justify-between">
            <h3 class="text-lg font-bold text-slate-900">All Activities</h3>
            <div className="flex items-center rounded-lg bg-slate-100 p-1">
                <button className="flex h-8 w-8 items-center justify-center rounded bg-white text-slate-900 shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">view_agenda</span>
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded text-slate-400">
                    <span className="material-symbols-outlined text-[20px]">grid_view</span>
                </button>
            </div>
        </div>

        <div className="flex flex-col gap-5 px-5">
            {/* Feed Item 1 */}
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-3 shadow-sm border border-slate-100">
                <div className="relative h-48 w-full overflow-hidden rounded-xl">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDFguDBi882IGyUl579QwdKO-DCrgYRomeEyR5OxLUfFt5qCaMiDrBhgh7UBnUgcc35myoiU4_jE0wOtHxkare-PHGITHBmak1xPcNlRIzJJtVX4Gq3Pv1QJyeJeJD-FixbDRwIxaLlX3rqjeI-xlEsHc2CeDpw_GJnAY13Cm_VwOHI6Fu8yeLiJ02sZPS0suxHmS1kyuTMbjQ971qCzf9Z-kHGEEqyojGG2jzMa79wHsJoGJH-SlJcBqdD_4KJEfuKP8XMWxP9Kdb" className="h-full w-full object-cover" alt="Cooking" />
                    <div className="absolute right-3 top-3 rounded-full bg-white/90 p-1.5 shadow-sm text-slate-400">
                        <span className="material-symbols-outlined block text-[20px]">favorite</span>
                    </div>
                    <div className="absolute bottom-3 left-3 rounded-lg bg-secondary-mint text-slate-900 px-2 py-1 text-xs font-bold shadow-sm">10% Off Member</div>
                </div>
                <div className="px-1">
                    <div className="flex items-start justify-between">
                        <div>
                            <h4 className="text-lg font-bold text-slate-900">Little Chefs Cooking Class</h4>
                            <p className="text-sm text-slate-500">1.2mi away • Culinary Kids</p>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-bold text-primary">$25</p>
                        </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                         <div className="flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                            <span className="material-symbols-outlined text-[14px]">child_care</span> 4-8 yrs
                        </div>
                        <div className="flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                            <span className="material-symbols-outlined text-[14px]">roofing</span> Indoor
                        </div>
                    </div>
                </div>
            </div>

            {/* Feed Item 2 */}
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-3 shadow-sm border border-slate-100">
                <div className="relative h-48 w-full overflow-hidden rounded-xl">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuASbRCP_pRNpsxjyp-892WhtQYTGH8ko-nuMpE3rXUo5n82NqN2HQzltDfk0jjdmKj_Zp3wyGVV5VPCsEJ8bcadIDy_UxbE9alEr3jBSCuvoB5lAyYMwzy82wF192vMlSnnyNXZz-wl8h2oUkbrQAQb_G7rOatXOT_5DByZxkUygyqbZ6hwROOJcAW9vQaZ1nIO8_SDPhDuwkM9-jONUmUhJVqL-MnLRY_OWfKHyTST2j-d4yhzrfQqHSUDBR6Sl6m14bV916u5SMjy" className="h-full w-full object-cover" alt="Puppet" />
                    <div className="absolute right-3 top-3 rounded-full bg-white/90 p-1.5 shadow-sm text-slate-400">
                        <span className="material-symbols-outlined block text-[20px]">favorite</span>
                    </div>
                </div>
                <div className="px-1">
                    <div className="flex items-start justify-between">
                        <div>
                            <h4 className="text-lg font-bold text-slate-900">Prospect Park Puppet Show</h4>
                            <p className="text-sm text-slate-500">0.5mi away • The Long Meadow</p>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-bold text-secondary-mint">Free</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default Home;