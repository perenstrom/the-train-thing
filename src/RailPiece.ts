import { Direction } from './Types';

export interface RailPiece {
  position: {
    x: number;
    y: number;
  };
  connections: {
    [key in Direction]?: RailPiece;
  };
}
