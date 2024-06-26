import { Unit } from './data';
import { SPECIALS } from './specials';

export const FACTORY: Unit[] = [
  {
    id: 'HALFLINGS',
    attack: 2,
    defence: 0,
    health: 2,
    initiative: 4,
    ranged: true,
    special: [SPECIALS.LUCK],
    upgradeFrom: '',
    costs: [3, 0],
    faction: 'Factory',
    tier: 'Bronze',
  },
  {
    id: 'HALFLINGS_#PACK',
    attack: 2,
    defence: 0,
    health: 2,
    initiative: 6,
    ranged: true,
    special: [SPECIALS.LUCK, SPECIALS.BYPASS_DEFENSE],
    upgradeFrom: 'HALFLINGS',
    costs: [4, 0],
    faction: 'Factory',
    tier: 'Bronze',
  },
  {
    id: 'MECHANICS',
    attack: 2,
    defence: 0,
    health: 3,
    initiative: 6,
    ranged: false,
    special: [], // not relevant in 1v1
    upgradeFrom: '',
    costs: [4, 0],
    faction: 'Factory',
    tier: 'Bronze',
  },
  {
    id: 'MECHANICS_#PACK',
    attack: 3,
    defence: 0,
    health: 4,
    initiative: 7,
    ranged: false,
    special: [], // not relevant in 1v1
    upgradeFrom: 'MECHANICS',
    costs: [6, 0],
    faction: 'Factory',
    tier: 'Bronze',
  },
  {
    id: 'ARMADILLOS',
    attack: 2,
    defence: 1,
    health: 3,
    initiative: 4,
    ranged: false,
    special: [],
    upgradeFrom: '',
    costs: [5, 0],
    faction: 'Factory',
    tier: 'Bronze',
  },
  {
    id: 'ARMADILLOS_#PACK',
    attack: 2,
    defence: 1,
    health: 4,
    initiative: 6,
    ranged: false,
    special: [],
    upgradeFrom: 'ARMADILLOS',
    costs: [6, 0],
    faction: 'Factory',
    tier: 'Bronze',
  },
  {
    id: 'AUTOMATONS',
    attack: 3,
    defence: 1,
    health: 4,
    initiative: 8,
    ranged: false,
    special: [SPECIALS.SELF_DESTRUCT],
    upgradeFrom: '',
    costs: [6, 0],
    faction: 'Factory',
    tier: 'Silver',
  },
  {
    id: 'AUTOMATONS_#PACK',
    attack: 4,
    defence: 1,
    health: 4,
    initiative: 9,
    ranged: false,
    special: [SPECIALS.IGNORE_RETALIATION],
    upgradeFrom: 'AUTOMATONS',
    costs: [12, 0],
    faction: 'Factory',
    tier: 'Silver',
  },
  {
    id: 'SANDWORMS',
    attack: 4,
    defence: 1,
    health: 5,
    initiative: 8,
    ranged: false,
    special: [SPECIALS.IGNORE_PARALYSIS],
    upgradeFrom: '',
    costs: [8, 0],
    faction: 'Factory',
    tier: 'Silver',
  },
  {
    id: 'SANDWORMS_#PACK',
    attack: 5,
    defence: 1,
    health: 5,
    initiative: 10,
    ranged: false,
    special: [SPECIALS.IGNORE_PARALYSIS],
    upgradeFrom: 'SANDWORMS',
    costs: [14, 0],
    faction: 'Factory',
    tier: 'Silver',
  },
  {
    id: 'BOUNTY_HUNTERS',
    attack: 5,
    defence: 1,
    health: 5,
    initiative: 7,
    ranged: true,
    special: [SPECIALS.PREEMPTIVE_SHOT_ONCE],
    upgradeFrom: '',
    costs: [13, 0],
    faction: 'Factory',
    tier: 'Gold',
  },
  {
    id: 'BOUNTY_HUNTERS_#PACK',
    attack: 6,
    defence: 1,
    health: 6,
    initiative: 8,
    ranged: true,
    special: [SPECIALS.PREEMPTIVE_SHOT_MANY],
    upgradeFrom: 'BOUNTY_HUNTERS',
    costs: [24, 0],
    faction: 'Factory',
    tier: 'Gold',
  },
  {
    id: 'COATLS',
    attack: 5,
    defence: 2,
    health: 7,
    initiative: 11,
    ranged: false,
    special: [],
    upgradeFrom: '',
    costs: [24, 0],
    faction: 'Factory',
    tier: 'Gold',
  },
  {
    id: 'COATLS_#PACK',
    attack: 6,
    defence: 3,
    health: 8,
    initiative: 13,
    ranged: false,
    special: [SPECIALS.INVULNERABLE],
    upgradeFrom: 'COATLS',
    costs: [44, 0],
    faction: 'Factory',
    tier: 'Gold',
  },
  {
    id: 'DREADNOUGHTS',
    attack: 5,
    defence: 3,
    health: 9,
    initiative: 6,
    ranged: false,
    special: [],
    upgradeFrom: '',
    costs: [28, 0],
    faction: 'Factory',
    tier: 'Gold',
  },
  {
    id: 'DREADNOUGHTS_#PACK',
    attack: 5,
    defence: 3,
    health: 10,
    initiative: 7,
    ranged: false,
    special: [],
    upgradeFrom: 'DREADNOUGHTS',
    costs: [42, 0],
    faction: 'Factory',
    tier: 'Gold',
  },
];
