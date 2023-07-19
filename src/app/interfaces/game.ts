export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  genre: string;
  platform: string;
  description: string;
  minimum_system_requirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
}
