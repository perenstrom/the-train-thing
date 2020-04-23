import { RailPiece } from './RailPiece';
import { Direction, RailPieces, SurroundingRailPieces, Field } from './Types';

console.clear();

export const create2dArray = (width: number, height: number): string[][] => {
  const emptyRow = new Array(width).fill('.');
  const result = [];
  for (let row = 0; row < height; row++) {
    result[row] = [...emptyRow];
  }

  return result;
};

export const calculateFieldRender = (
  railPieces: RailPieces,
  field: Field
): string[][] => {
  const result = create2dArray(field.width, field.height);

  railPieces.forEach((railPiece) => {
    result[railPiece.position.y][railPiece.position.x] = '#';
  });

  return result;
};

export const getSurroundingRailPieces = (
  railPieces: RailPieces,
  railPiece: RailPiece
): SurroundingRailPieces => {
  return null;
};

export const addRailPiece = (
  railPieces: RailPieces,
  railPiece: RailPiece
): RailPieces => {
  railPieces.push(railPiece);
  return railPieces;
};

const field: Field = { width: 5, height: 5 };

const railPieces: RailPieces = [];
railPieces.push({ position: { x: 0, y: 0 }, connections: {} });
railPieces.push({
  position: { x: 1, y: 0 },
  connections: { [Direction.W]: railPieces[0] },
});
railPieces[0].connections[Direction.E] = railPieces[1];

const renderField = (): void => {
  const fieldRows = calculateFieldRender(railPieces, field);

  fieldRows.forEach((row) => {
    console.log(row.join(''));
  });
};

renderField();
