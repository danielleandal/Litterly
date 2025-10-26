import React from 'react';
import type { TreeDefinition, Rarity } from '../types';

interface RevealModalProps {
  tree: TreeDefinition | null;
  onClose: () => void;
}

const RARITY_COLORS: Record<Rarity, string> = {
    Common: 'bg-slate-200 text-slate-700',
    Uncommon: 'bg-green-200 text-green-800',
    Rare: 'bg-blue-200 text-blue-800',
    Epic: 'bg-purple-300 text-purple-900 font-bold',
};

const RevealModal: React.FC<RevealModalProps> = ({ tree, onClose }) => {
  if (!tree) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-sm w-full transform transition-all animate-scale-up">
        <p className="text-sm font-bold text-slate-500">A new tree has grown!</p>
        <div className="my-4 h-48 w-48 mx-auto flex items-center justify-center">
            <tree.Icon className="h-full w-full" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800">{tree.name}</h2>
        <span className={`inline-block px-3 py-1 text-sm rounded-full mt-2 ${RARITY_COLORS[tree.rarity]}`}>
            {tree.rarity}
        </span>
        <button 
          onClick={onClose} 
          className="mt-6 w-full bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-emerald-600 transition-colors"
        >
          Grow Another!
        </button>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        
        @keyframes scale-up {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-up { animation: scale-up 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
      `}</style>
    </div>
  );
};

export default RevealModal;
