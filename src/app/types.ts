interface statistics {
  games: {
    position: string;
  }
}

export interface Player {
  id: number;
  name: string;
  position: string;
  photo: string;
  player: {
    id: number;
    name: string;
    position: string;
    photo: string;
  },
  statistics: statistics[];
  team: {
    id: number;
    name: string;
  };
}

export interface Team {
  id: number;
  name: string;
  country: string;
  founded: number;
  logo: string;
  venue: {
    name: string;
    address: string;
    capacity: number;
    city: string;
    image: string;
  };
  players?: Player[];
}

export interface FieldProps {
  players: Player[];
}

export interface PositionCoordinate {
  x: number;
  y: number;
}

export interface PositionCoordinates {
  [key: string]: PositionCoordinate | PositionCoordinate[];
}

export const positions: PositionCoordinates = {
  "Goalkeeper": { x: 50, y: 15 },
  "Defender": [{ x: 20, y: 25 }, { x: 80, y: 25 }],
  "Midfielder": [{ x: 35, y: 50 }, { x: 65, y: 50 }],
  "Attacker": [{ x: 50, y: 75 }],
};