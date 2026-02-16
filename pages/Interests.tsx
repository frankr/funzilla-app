import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Interest {
  id: string;
  label: string;
  icon: string;
}

const INTERESTS: Interest[] = [
  { id: 'nature', label: 'Nature', icon: 'forest' },
  { id: 'tech', label: 'Tech', icon: 'smart_toy' },
  { id: 'sports', label: 'Sports', icon: 'sports_soccer' },
  { id: 'budget', label: 'Budget', icon: 'savings' },
  { id: 'art', label: 'Art', icon: 'palette' },
  { id: 'edu', label: 'Education', icon: 'school' },
  { id: 'music', label: 'Music', icon: 'music_note' },
  { id: 'outdoors', label: 'Outdoors', icon: 'camping' },
];

const Interests: React.FC = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>(['nature', 'budget']);

  const toggleInterest = (id: string) => {
    setSelected(prev => 
      prev.includes(id) 
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col h-full bg-background-light relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col px-6 pt-6 pb-6 z-10">
        {/* Progress */}
        <div className="flex w-full flex-row items-center justify-center gap-3 py-5 mb-4">
            <div className="h-2 w-2 rounded-full bg-primary/20"></div>
            <div className="h-2 w-8 rounded-full bg-primary"></div>
            <div className="h-2 w-2 rounded-full bg-primary/20"></div>
        </div>
        <h1 className="text-slate-900 tracking-tight text-[32px] font-bold leading-tight text-left">
            What are you into?
        </h1>
        <p className="text-slate-500 text-base font-medium leading-normal pt-3">
            Select your interests to help us find the best matches.
        </p>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto px-6 pb-4 no-scrollbar z-10">
        <div className="grid grid-cols-2 gap-4">
            {INTERESTS.map((item) => {
                const isSelected = selected.includes(item.id);
                return (
                    <button
                        key={item.id}
                        onClick={() => toggleInterest(item.id)}
                        className={`
                            relative flex flex-col items-center justify-center gap-3 rounded-xl border-2 p-6 shadow-sm transition-all duration-200 hover:shadow-md h-full
                            ${isSelected 
                                ? 'bg-primary-light border-primary text-primary' 
                                : 'bg-white border-transparent text-slate-900 hover:border-slate-100'
                            }
                        `}
                    >
                        <div className={`
                            flex h-14 w-14 items-center justify-center rounded-full transition-colors duration-200
                            ${isSelected ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}
                        `}>
                            <span className="material-symbols-outlined text-[32px]">{item.icon}</span>
                        </div>
                        <span className="text-lg font-bold">{item.label}</span>
                    </button>
                );
            })}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-6 pb-8 bg-white/95 backdrop-blur-sm z-20 w-full mt-auto border-t border-slate-50">
        <div className="flex flex-col gap-4">
            <button 
                onClick={() => navigate('/setup')}
                className="w-full text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors pb-1"
            >
                Skip for now
            </button>
            <button 
                onClick={() => navigate('/setup')}
                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-primary hover:bg-primary/90 transition-colors text-white text-lg font-bold leading-normal tracking-wide shadow-lg shadow-primary/30 active:scale-[0.98]"
            >
                <span>Next</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Interests;