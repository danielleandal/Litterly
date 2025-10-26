import React from 'react';
import type { View } from '../types';

interface BottomNavProps {
  currentView: View;
  setView: (view: View) => void;
}

const NavItem: React.FC<{
  label: string;
  // FIX: Changed JSX.Element to React.ReactElement to resolve namespace issue.
  icon: React.ReactElement;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => {
  const activeClasses = 'text-emerald-600';
  const inactiveClasses = 'text-slate-500 hover:text-emerald-500';

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors duration-200 ${isActive ? activeClasses : inactiveClasses}`}
    >
      {icon}
      <span className={`text-xs font-bold mt-1`}>{label}</span>
    </button>
  );
};

const BottomNav: React.FC<BottomNavProps> = ({ currentView, setView }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md shadow-[0_-2px_10px_rgba(0,0,0,0.05)] flex justify-around items-center max-w-2xl mx-auto border-t border-slate-200">
      <NavItem
        label="Home"
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>}
        isActive={currentView === 'home'}
        onClick={() => setView('home')}
      />
      <NavItem
        label="Scan"
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
        isActive={currentView === 'scan'}
        onClick={() => setView('scan')}
      />
      <NavItem
        label="Garden"
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19M4.879 4.879L9.75 9.75m1.5-3.086a3 3 0 014.243 4.243m-4.243-4.243L6.343 17.657m1.5-3.086a3 3 0 004.243 4.243" /></svg>}
        isActive={currentView === 'garden'}
        onClick={() => setView('garden')}
      />
      <NavItem
        label="Profile"
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
        isActive={currentView === 'profile'}
        onClick={() => setView('profile')}
      />
    </nav>
  );
};

export default BottomNav;