import type React from 'react';

// NEW: Rarity levels for trees
export type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Epic';

// NEW: The four main views of the app
export type View = 'home' | 'scan' | 'garden' | 'profile';

// NEW: Definition for a specific type of tree
export interface TreeDefinition {
  id: string;
  name: string;
  rarity: Rarity;
  Icon: React.FC<{ className?: string }>;
}

// This represents the visual stages of a growing tree
export interface TreeStage {
  points: number;
  name: string;
  Icon: React.FC<{ className?: string }>;
}

// UPDATED: GardenItem now references a specific TreeDefinition
export interface GardenItem {
  id: string; // Unique instance ID
  treeId: string; // ID from TreeDefinition
  date: Date;
}

// UPDATED: AnalysisResult now includes the type of litter
export interface AnalysisResult {
    isValid: boolean;
    reason: string;
    points: number;
    litterType?: string; // e.g., 'Plastic Bottle', 'Paper', 'Can'
}

// NEW: A structure to hold all user statistics for the profile page
export interface UserStats {
  totalPoints: number;
  itemsScanned: number;
  streak: number;
  litterTypeCounts: Record<string, number>;
  treesGrown: number;
}
