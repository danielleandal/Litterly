import type { TreeStage, TreeDefinition } from './types';
import { 
  SeedIcon, SproutIcon, SaplingIcon, YoungTreeIcon, 
  OakIcon, PineIcon, MapleIcon, WillowIcon, CherryBlossomIcon, RainbowTreeIcon,
  // NEW: Importing 14 new tree icons
  BirchIcon, SpruceIcon, PalmIcon, BaobabIcon,
  RedwoodIcon, JoshuaTreeIcon, BanyanIcon, GinkgoIcon,
  JacarandaIcon, WisteriaIcon, MagnoliaIcon, DragonBloodIcon,
  CrystalTreeIcon, StarlightTreeIcon
} from './components/icons/TreeIcons';

export const MAX_TREE_POINTS = 100;

// This represents the visual growth of the current sapling
export const TREE_STAGES: TreeStage[] = [
  { points: 0, name: 'Seed', Icon: SeedIcon },
  { points: 25, name: 'Sprout', Icon: SproutIcon },
  { points: 50, name: 'Sapling', Icon: SaplingIcon },
  { points: 75, name: 'Young Tree', Icon: YoungTreeIcon },
];

// UPDATED: The collection of all possible trees is now 20
export const TREE_DEFINITIONS: TreeDefinition[] = [
  // Common
  { id: 'oak', name: 'Oak Tree', rarity: 'Common', Icon: OakIcon },
  { id: 'pine', name: 'Pine Tree', rarity: 'Common', Icon: PineIcon },
  { id: 'birch', name: 'Birch Tree', rarity: 'Common', Icon: BirchIcon },
  { id: 'spruce', name: 'Spruce Tree', rarity: 'Common', Icon: SpruceIcon },
  { id: 'palm', name: 'Palm Tree', rarity: 'Common', Icon: PalmIcon },
  { id: 'baobab', name: 'Baobab Tree', rarity: 'Common', Icon: BaobabIcon },
  
  // Uncommon
  { id: 'maple', name: 'Maple Tree', rarity: 'Uncommon', Icon: MapleIcon },
  { id: 'willow', name: 'Willow Tree', rarity: 'Uncommon', Icon: WillowIcon },
  { id: 'redwood', name: 'Redwood Tree', rarity: 'Uncommon', Icon: RedwoodIcon },
  { id: 'joshua', name: 'Joshua Tree', rarity: 'Uncommon', Icon: JoshuaTreeIcon },
  { id: 'banyan', name: 'Banyan Tree', rarity: 'Uncommon', Icon: BanyanIcon },
  { id: 'ginkgo', name: 'Ginkgo Tree', rarity: 'Uncommon', Icon: GinkgoIcon },

  // Rare
  { id: 'cherry', name: 'Cherry Blossom', rarity: 'Rare', Icon: CherryBlossomIcon },
  { id: 'jacaranda', name: 'Jacaranda', rarity: 'Rare', Icon: JacarandaIcon },
  { id: 'wisteria', name: 'Wisteria Tree', rarity: 'Rare', Icon: WisteriaIcon },
  { id: 'magnolia', name: 'Magnolia Tree', rarity: 'Rare', Icon: MagnoliaIcon },
  { id: 'dragon', name: "Dragon's Blood", rarity: 'Rare', Icon: DragonBloodIcon },

  // Epic
  { id: 'rainbow', name: 'Rainbow Tree', rarity: 'Epic', Icon: RainbowTreeIcon },
  { id: 'crystal', name: 'Crystal Tree', rarity: 'Epic', Icon: CrystalTreeIcon },
  { id: 'starlight', name: 'Starlight Tree', rarity: 'Epic', Icon: StarlightTreeIcon },
];
