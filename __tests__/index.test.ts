import { RailPiece } from '../src/RailPiece';
import { calculateFieldRender, create2dArray } from '../src/index';

test('Renders a field', () => {
  // Arrange
  const field = { width: 5, height: 2 };
  const railPieces: Array<RailPiece> = [
    { position: { x: 0, y: 0 } },
    { position: { x: 1, y: 0 } },
  ];

  // Act
  const renderStrings = calculateFieldRender(railPieces, field);

  // Assert
  const expectedStrings: string[][] = [
    ['#', '#', '.', '.', '.'],
    ['.', '.', '.', '.', '.'],
  ];

  expect(renderStrings).toEqual(expectedStrings);
});

test('Create an empty 2d array', () => {
  // Act
  const resultingArray = create2dArray(5, 2);

  // Assert
  const expectedArray: string[][] = [
    ['.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.'],
  ];

  expect(resultingArray).toEqual(expectedArray);
});
