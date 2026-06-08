export interface Athlete {
  id: string;
  name: string;
  sport: string;
  position: string;
  age: number;
  score: number;
  stats: {
    [key: string]: number;
  };
}
