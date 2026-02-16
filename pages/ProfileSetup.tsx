import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileSetup: React.FC = () => {
  const navigate = useNavigate();
  const [age, setAge] = useState(5);

  return (
    <div className="flex flex-col h-full bg-white relative overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 flex items-center justify-between z-10 bg-white/80 backdrop-blur-md sticky top-0">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors text-slate-800">
            <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex flex-col items-center">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">Step 2 of 3</span>
        </div>
        <button onClick={() => navigate('/home')} className="text-sm font-semibold text-slate-400 hover:text-slate-600">Skip</button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24">
         <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2 leading-tight">Tell us about<br/>your kid</h1>
            <p className="text-slate-500 text-base">We'll find the perfect adventures for them.</p>
         </div>

         {/* Avatar */}
         <div className="flex justify-center mb-8">
            <div className="relative group cursor-pointer">
                <div 
                    className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center border-4 border-white shadow-soft overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBC_f211ZhbO8K_kYhydAmtb9u4jXv99IMbkY3YzAovWI_jLMve4ZQ6T3k4eX3EX9cYC18RG7zkwxLGqV3FKTLjQQ9O9F_qWlB6XGpRM2xTaipLPJmfElCrNi-QBPEAnImiDCzwrHV3m7ERG4kGizgfzZRQTM9T9unBOpD3j254DJsKP8nKkuyz-RRL9RjG8yYQZ_DFmfMSGBo-Fe7L5P19Dd4-xKu2Vzigd0BU_Lec9EAsfr5kZklGTTJ7uyA--9Vd29-DgPL9l4WG')` }}
                >
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center border-2 border-white shadow-md">
                    <span className="material-symbols-outlined text-[18px]">add_a_photo</span>
                </button>
            </div>
         </div>

         {/* Name Input */}
         <div className="mb-8 space-y-2">
            <label htmlFor="kidName" className="block text-sm font-bold text-slate-700 ml-1">Name</label>
            <div className="relative">
                <input 
                    type="text" 
                    id="kidName" 
                    placeholder="Child's First Name"
                    className="w-full bg-slate-50 border-0 ring-1 ring-slate-200 rounded-full py-4 pl-6 pr-12 text-lg font-medium text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none shadow-sm"
                />
                <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-primary">face</span>
            </div>
         </div>

         {/* Age Slider */}
         <div className="mb-10 p-5 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10">
            <div className="flex justify-between items-center mb-6">
                <label className="text-sm font-bold text-slate-700">Age</label>
                <div className="px-3 py-1 bg-white rounded-lg shadow-sm text-primary font-bold text-lg">
                    {age} <span className="text-xs font-normal text-slate-400">years</span>
                </div>
            </div>
            <div className="relative w-full h-8 flex items-center">
                <div className="absolute w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${(age/12)*100}%` }}></div>
                </div>
                <input 
                    type="range" 
                    min="0" 
                    max="12" 
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value))}
                    className="absolute w-full h-2 appearance-none bg-transparent focus:outline-none z-10"
                />
                <div className="absolute -bottom-6 left-0 text-xs font-medium text-slate-400">0</div>
                <div className="absolute -bottom-6 right-0 text-xs font-medium text-slate-400">12</div>
            </div>
         </div>

         {/* Mini Interests */}
         <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                Interests 
                <span className="text-xs font-normal text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">Select top 3</span>
            </h3>
            <div className="grid grid-cols-2 gap-3">
                 <button className="relative group flex flex-col items-center justify-center p-4 rounded-2xl bg-primary/10 border-2 border-primary transition-all duration-200 overflow-hidden text-center">
                    <div className="absolute top-2 right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-[14px]">check</span>
                    </div>
                    <div className="w-12 h-12 mb-2 rounded-full bg-white flex items-center justify-center text-2xl shadow-sm">🦕</div>
                    <span className="font-bold text-primary text-sm">Dinosaurs</span>
                 </button>

                 <button className="relative group flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 border-2 border-transparent hover:border-slate-200 transition-all duration-200 text-center">
                    <div className="w-12 h-12 mb-2 rounded-full bg-white flex items-center justify-center text-2xl shadow-sm border border-slate-100">🚀</div>
                    <span className="font-semibold text-slate-600 text-sm">Space</span>
                 </button>
            </div>
         </div>
      </div>

      {/* Sticky Footer */}
      <div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-lg border-t border-slate-100 p-4 pb-8 z-20">
        <button 
            onClick={() => navigate('/home')}
            className="w-full bg-primary hover:bg-blue-500 text-white font-bold text-lg py-4 rounded-full shadow-lg shadow-blue-500/30 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
        >
            Finish Setup
            <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileSetup;