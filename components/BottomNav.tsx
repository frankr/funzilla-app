import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNav: React.FC = () => {
  return (
    <nav className="absolute bottom-0 z-50 w-full border-t border-slate-100 bg-white pb-safe-area shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
      <div className="flex items-center justify-around px-2 pt-2 pb-4">
        <NavLink 
          to="/home" 
          className={({ isActive }) => 
            `flex flex-1 flex-col items-center gap-1 transition-colors ${isActive ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}`
          }
        >
          <span className="material-symbols-outlined text-[26px] filled">home</span>
          <span className="text-[10px] font-bold">Home</span>
        </NavLink>
        
        <NavLink 
          to="/map" 
          className={({ isActive }) => 
            `flex flex-1 flex-col items-center gap-1 transition-colors ${isActive ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}`
          }
        >
          <span className="material-symbols-outlined text-[26px]">map</span>
          <span className="text-[10px] font-medium">Map</span>
        </NavLink>
        
        <a href="#" className="flex flex-1 flex-col items-center gap-1 text-slate-400 hover:text-slate-600">
          <span className="material-symbols-outlined text-[26px]">favorite</span>
          <span className="text-[10px] font-medium">Saved</span>
        </a>
        
        <a href="#" className="flex flex-1 flex-col items-center gap-1 text-slate-400 hover:text-slate-600">
          <span className="material-symbols-outlined text-[26px]">person</span>
          <span className="text-[10px] font-medium">Profile</span>
        </a>
      </div>
    </nav>
  );
};

export default BottomNav;