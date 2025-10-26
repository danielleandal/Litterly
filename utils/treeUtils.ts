import { TREE_DEFINITIONS } from '../constants';
import type { TreeDefinition, Rarity } from '../types';

const RARITY_WEIGHTS: Record<Rarity, number> = {
  'Common': 70,
  'Uncommon': 20,
  'Rare': 9,
  'Epic': 1,
};

export function revealRandomTree(): TreeDefinition {
  const weightedList: TreeDefinition[] = [];

  TREE_DEFINITIONS.forEach(tree => {
    const weight = RARITY_WEIGHTS[tree.rarity];
    for (let i = 0; i < weight; i++) {
      weightedList.push(tree);
    }
  });

  const randomIndex = Math.floor(Math.random() * weightedList.length);
  return weightedList[randomIndex];
}