import React from 'react';
import { TREE_STAGES, MAX_TREE_POINTS } from '../constants';

interface TreeViewProps {
  currentPoints: number;
}

const TreeView: React.FC<TreeViewProps> = ({ currentPoints }) => {
  const currentStage = [...TREE_STAGES].reverse().find(stage => currentPoints >= stage.points) || TREE_STAGES[0];
  const progressPercentage = Math.min((currentPoints / MAX_TREE_POINTS) * 100, 100);

  // Find the next stage to show progress towards it
  const nextStageIndex = TREE_STAGES.findIndex(stage => stage.points > currentPoints);
  const nextStage = nextStageIndex !== -1 ? TREE_STAGES[nextStageIndex] : null;

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg p-6 mb-4 flex flex-col items-center">
      <div className="w-full text-center mb-4">
        <h2 className="text-xl font-bold text-slate-700">Your Sapling</h2>
        <p className="text-lg font-semibold text-emerald-600">
          {currentStage.name}
          {nextStage ? ` → ${nextStage.name}` : ' → Reveal!'}
        </p>
      </div>
      <div className="h-48 w-48 flex items-center justify-center mb-4">
        <currentStage.Icon className="h-full w-full" />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center text-sm text-slate-600 mb-1">
          <span>Growth Progress</span>
          <span className="font-semibold">{currentPoints} / {MAX_TREE_POINTS} pts</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-lime-400 to-emerald-500 h-4 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TreeView;