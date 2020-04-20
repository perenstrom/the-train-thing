import { RailPiece } from '../src/RailPiece';
import { calculateFieldRender } from '../src/index';

test('Renders a field', () => {
  // Arrange
  const field = { width: 5, height: 5 };
  const railPieces: Array<RailPiece> = [
    { position: { x: 0, y: 0 } },
    { position: { x: 1, y: 0 } },
  ];

  // Act
  const renderStrings = calculateFieldRender(railPieces, field);

  // Assert
  const expectedString = '';
  expect(renderStrings).toEqual(expectedString);
});
