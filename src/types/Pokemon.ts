export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  baseExperience: number;
  types: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
  };
}
