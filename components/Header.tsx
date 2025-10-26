import React from 'react';

interface HeaderProps {
  collectedCount: number;
  totalCount: number;
}

const Header: React.FC<HeaderProps> = ({ collectedCount, totalCount }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center max-w-2xl">
        <div className="flex items-center space-x-2">
          <span role="img" aria-label="leaf" className="text-3xl">🌿</span>
          <h1 className="text-2xl font-bold text-emerald-700">Litterly</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-lime-100 text-lime-800 font-bold px-3 py-1 rounded-full">
            <span role="img" aria-label="tree" className="text-lg">🌳</span>
            <span>{collectedCount} / {totalCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
