import { RailPiece } from './RailPiece';

console.clear();

interface Field {
  width: number;
  height: number;
}

export const create2dArray = (width: number, height: number): string[][] => {
  const emptyRow = new Array(width).fill('.');
  const result = [];
  for (let row = 0; row < height; row++) {
    result[row] = [...emptyRow];
  }

  return result;
};

export const calculateFieldRender = (
  railPieces: Array<RailPiece>,
  field: Field
): string[][] => {
  const result = create2dArray(field.width, field.height);

  railPieces.forEach((railPiece) => {
    result[railPiece.position.y][railPiece.position.x] = '#';
  });

  return result;
};

const field: Field = { width: 5, height: 5 };

const railPieces: Array<RailPiece> = [
  { position: { x: 0, y: 0 } },
  { position: { x: 1, y: 0 } },
];

const renderField = () => {
  const fieldRows = calculateFieldRender(railPieces, field);

  fieldRows.forEach(row => {
    console.log(row.join(''));
  })
};

renderField();