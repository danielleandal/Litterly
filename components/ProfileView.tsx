import React, { useMemo } from 'react';
import type { UserStats } from '../types';

interface ProfileViewProps {
  stats: UserStats;
}

const StatCard: React.FC<{ label: string; value: string | number; icon: string }> = ({ label, value, icon }) => (
  <div className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-4">
    <div className="text-3xl">{icon}</div>
    <div>
      <p className="text-sm text-slate-500">{label}</p>
      <p className="text-xl font-bold text-slate-800">{value}</p>
    </div>
  </div>
);

const ProfileView: React.FC<ProfileViewProps> = ({ stats }) => {

  const sortedLitterTypes = useMemo(() => {
    // FIX: The original destructuring in the sort callback was causing a TypeScript type inference error.
    // It has been replaced with a simpler syntax that correctly infers the types for the comparison.
    return Object.entries(stats.litterTypeCounts).sort((a, b) => b[1] - a[1]);
  }, [stats.litterTypeCounts]);

  return (
    <div className="flex-grow w-full space-y-4">
        <h2 className="text-2xl font-bold text-center text-slate-700">Your Impact</h2>
        
        <div className="grid grid-cols-2 gap-4">
            <StatCard label="Total Points" value={stats.totalPoints} icon="⭐" />
            <StatCard label="Items Scanned" value={stats.itemsScanned} icon="♻️" />
            <StatCard label="Collection Streak" value={`${stats.streak} Days`} icon="🔥" />
        </div>

        <div className="bg-white rounded-xl shadow-md p-4">
            <h3 className="text-lg font-bold text-slate-800 mb-3 text-center">Litter Breakdown</h3>
            {sortedLitterTypes.length > 0 ? (
                <ul className="space-y-2">
                {sortedLitterTypes.map(([type, count]) => (
                    <li key={type} className="flex items-center justify-between bg-slate-50 p-2 rounded-lg">
                    <span className="font-medium text-slate-700">{type}</span>
                    <span className="font-bold text-emerald-600 bg-emerald-100 px-2.5 py-1 rounded-full text-sm">{count}</span>
                    </li>
                ))}
                </ul>
            ) : (
                <p className="text-center text-slate-500 py-4">Scan some litter to see your breakdown!</p>
            )}
        </div>

        <div className="bg-gradient-to-br from-emerald-400 to-lime-500 text-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold">Litterly's Promise</h3>
            <p className="mt-2">For every virtual tree you grow, we partner with environmental charities to plant a real tree in a place that needs it most.</p>
            <div className="mt-4 text-4xl font-black flex items-center justify-center space-x-3">
                <span>🌳</span>
                <span>x</span>
                <span>{stats.treesGrown}</span>
            </div>
            <p className="font-semibold">You've helped plant {stats.treesGrown} real trees!</p>
        </div>
    </div>
  );
};

export default ProfileView;
