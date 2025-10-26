import React, { useState, useCallback, useEffect, useMemo } from 'react';
import Header from './components/Header';
import TreeView from './components/TreeView';
import CameraView from './components/CameraView';
import GardenView from './components/GardenView';
import ProfileView from './components/ProfileView';
import BottomNav from './components/BottomNav';
import RevealModal from './components/RevealModal';
import type { GardenItem, TreeDefinition, UserStats, View, AnalysisResult } from './types';
import { MAX_TREE_POINTS, TREE_DEFINITIONS } from './constants';
import { revealRandomTree } from './utils/treeUtils';

const App: React.FC = () => {
  const [currentTreePoints, setCurrentTreePoints] = useState(0);
  const [garden, setGarden] = useState<GardenItem[]>([]);
  const [view, setView] = useState<View>('home');
  const [isLoading, setIsLoading] = useState(false);
  const [revealedTree, setRevealedTree] = useState<TreeDefinition | null>(null);
  const [userStats, setUserStats] = useState<UserStats>({
    totalPoints: 0,
    itemsScanned: 0,
    streak: 1, // Mock streak
    litterTypeCounts: {},
    treesGrown: 0,
  });

  useEffect(() => {
    if (currentTreePoints >= MAX_TREE_POINTS) {
      const newTree = revealRandomTree();
      setGarden(prev => [...prev, { id: `tree-instance-${Date.now()}`, treeId: newTree.id, date: new Date() }]);
      setCurrentTreePoints(prev => prev - MAX_TREE_POINTS);
      setRevealedTree(newTree);
      setUserStats(prev => ({ ...prev, treesGrown: prev.treesGrown + 1 }));
    }
  }, [currentTreePoints]);
  
  const handleAnalysisComplete = useCallback((result: AnalysisResult) => {
    if (result.isValid && result.points > 0) {
      setCurrentTreePoints(prev => prev + result.points);
      setUserStats(prev => {
        const newCounts = { ...prev.litterTypeCounts };
        if (result.litterType && result.litterType !== 'None') {
          newCounts[result.litterType] = (newCounts[result.litterType] || 0) + 1;
        }
        return {
          ...prev,
          totalPoints: prev.totalPoints + result.points,
          itemsScanned: prev.itemsScanned + 1,
          litterTypeCounts: newCounts,
        }
      });
    }
  }, []);

  const handleCloseRevealModal = () => {
    setRevealedTree(null);
  };
  
  const uniqueTreesCollected = useMemo(() => {
    const collectedIds = new Set(garden.map(item => item.treeId));
    return Array.from(collectedIds).map(id => TREE_DEFINITIONS.find(t => t.id === id)).filter(Boolean) as TreeDefinition[];
  }, [garden]);

  const LoadingOverlay: React.FC = () => (
    <div className="fixed inset-0 bg-slate-900 bg-opacity-70 flex flex-col items-center justify-center z-50 text-white">
        <svg className="animate-spin h-12 w-12 text-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p className="mt-4 text-lg font-semibold">Analyzing your good deed...</p>
    </div>
  );

  const renderView = () => {
    switch(view) {
      case 'home':
        return (
            <div className="flex flex-col items-center justify-center flex-grow">
                 <TreeView currentPoints={currentTreePoints} />
                 <div className="text-center p-4 mt-4">
                     <p className="text-slate-600">You're doing great! Scan more litter to help your sapling grow.</p>
                 </div>
            </div>
        );
      case 'scan':
        return <CameraView onAnalysisComplete={handleAnalysisComplete} setIsLoading={setIsLoading} />;
      case 'garden':
        return <GardenView collectedTrees={uniqueTreesCollected} />;
      case 'profile':
        return <ProfileView stats={userStats} />;
      default:
        return <TreeView currentPoints={currentTreePoints} />;
    }
  }

  return (
    <div className="min-h-screen bg-lime-50 font-sans flex flex-col">
      {isLoading && <LoadingOverlay />}
      <RevealModal tree={revealedTree} onClose={handleCloseRevealModal} />
      <Header 
        collectedCount={uniqueTreesCollected.length}
        totalCount={TREE_DEFINITIONS.length}
      />
      <main className="flex-grow container mx-auto p-4 flex flex-col max-w-2xl pb-24">
        {renderView()}
      </main>
      <BottomNav currentView={view} setView={setView} />
    </div>
  );
};

export default App;
