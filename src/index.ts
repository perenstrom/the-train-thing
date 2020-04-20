import { RailPiece } from './RailPiece';

console.clear();
console.log('hello world');
console.log('test');

interface Field {
  width: number;
  height: number;
}

const field: Field = { width: 5, height: 5 };

const railPieces: Array<RailPiece> = [
  { position: { x: 0, y: 0 } },
  { position: { x: 1, y: 0 } },
];

export const calculateFieldRender = (
  railPieces: Array<RailPiece>,
  field: Field
) => {
  return null;
};

const renderField = () => {
  let cells = new Array(field.width).fill(0);
};
