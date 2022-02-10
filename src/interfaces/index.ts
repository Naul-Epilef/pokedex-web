export interface IPokemon {
  national_number: string;
  evolution?: {
    name: string;
  };
  sprites: {
    normal: string;
    large: string;
    animated: string;
  };
  name: string;
  type: string[];
}
