import { Direction } from './Direction';
import { RailPiece } from '../RailPiece';

export interface SurroundingRailPieces {
  connections: {
    [key in Direction]?: RailPiece;
  };
}