import React from 'react';
import type { TreeDefinition, Rarity } from '../types';

interface GardenViewProps {
  collectedTrees: TreeDefinition[];
}

const RARITY_COLORS: Record<Rarity, string> = {
    Common: 'border-slate-300',
    Uncommon: 'border-green-400',
    Rare: 'border-blue-500',
    Epic: 'border-purple-500',
};

const RARITY_TEXT_COLORS: Record<Rarity, string> = {
    Common: 'text-slate-500',
    Uncommon: 'text-green-600',
    Rare: 'text-blue-700',
    Epic: 'text-purple-700',
};


const GardenView: React.FC<GardenViewProps> = ({ collectedTrees }) => {
  if (collectedTrees.length === 0) {
    return (
      <div className="flex-grow flex flex-col items-center justify-center text-center bg-white rounded-2xl shadow-lg p-6">
        <div className="text-5xl mb-4">🏜️</div>
        <h2 className="text-2xl font-bold text-slate-700">Your Garden is Empty</h2>
        <p className="text-slate-500 mt-2">Grow your first tree to start your collection!</p>
      </div>
    );
  }

  return (
    <div className="flex-grow bg-white rounded-2xl shadow-lg p-6">
       <h2 className="text-2xl font-bold text-center text-slate-700 mb-6">My Tree Collection</h2>
       <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {collectedTrees.map((tree) => (
          <div key={tree.id} className={`flex flex-col items-center text-center p-3 bg-lime-50 rounded-lg border-2 ${RARITY_COLORS[tree.rarity]}`}>
            <tree.Icon className="w-24 h-24" />
            <p className="font-bold text-slate-700 mt-2">{tree.name}</p>
            <p className={`text-sm font-semibold ${RARITY_TEXT_COLORS[tree.rarity]}`}>{tree.rarity}</p>
          </div>
        ))}
       </div>
    </div>
  );
};

export default GardenView;