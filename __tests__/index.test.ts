import { RailPiece } from '../src/RailPiece';
import {
  calculateFieldRender,
  create2dArray,
  getSurroundingRailPieces,
  addRailPiece,
} from '../src/index';
import { RailPieces, SurroundingRailPieces } from '../src/Types';
import { Direction } from '../src/Types/Direction';

test('Renders a field', () => {
  // Arrange
  const field = { width: 5, height: 2 };
  const railPieces: Array<RailPiece> = [
    { position: { x: 0, y: 0 }, connections: {} },
    { position: { x: 1, y: 0 }, connections: {} },
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

describe('Add rail piece', () => {
  test('Adds a connected rail piece to empty array', () => {
    // Arrange
    const initialRailPieces: RailPieces = [];
    const railPieceToAdd: RailPiece = {
      position: {
        x: 2,
        y: 2,
      },
      connections: {},
    };

    // Act
    const railPieces: RailPieces = addRailPiece(
      initialRailPieces,
      railPieceToAdd
    );
    const expectedRailPieces: RailPieces = [railPieceToAdd];

    // Assert
    expect(railPieces).toEqual(expectedRailPieces);
  });

  /* test('Adds a connected rail piece next to another rail pirece', () => {
    // Arrange
    const initialRailPieces: RailPieces = [
      {
        position: {
          x: 2,
          y: 2,
        },
        connections: {},
      },
    ];
    const railPieceToAdd: RailPiece = {
      position: {
        x: 2,
        y: 3,
      },
      connections: {},
    };

    // Act
    const railPieces: RailPieces = addRailPiece(
      initialRailPieces,
      railPieceToAdd
    );
    const expectedRailPiece1: RailPiece = {
      position: {
        x: 2,
        y: 2,
      },
      connections: {},
    };
    const expectedRailPiece2: RailPiece = {
      position: {
        x: 2,
        y: 3,
      },
      connections: { [Direction.N]: expectedRailPiece1 },
    };
    expectedRailPiece1.connections[Direction.S] = expectedRailPiece2;

    const expectedRailPieces: RailPieces = [
      expectedRailPiece1,
      expectedRailPiece2,
    ];

    // Assert
    expect(railPieces).toEqual(expectedRailPieces);
  }); */
});

describe('Get surrounding rail pieces', () => {
  test('Returns surrounding rail pieces', () => {
    // Arrange
    const testingPiece: RailPiece = {
      position: {
        x: 3,
        y: 3,
      },
      connections: {},
    };
    const railPieces: RailPieces = [
      {
        position: {
          x: 3,
          y: 2,
        },
        connections: {},
      },
      {
        position: {
          x: 2,
          y: 3,
        },
        connections: {},
      },
    ];
    railPieces[0].connections[Direction.SW] = railPieces[1];
    railPieces[1].connections[Direction.NE] = railPieces[0];

    // Act
    const surroundingRailPieces: SurroundingRailPieces = getSurroundingRailPieces(
      railPieces,
      testingPiece
    );

    // Assert
    const expectedSurrounding: SurroundingRailPieces = {
      connections: {
        [Direction.N]: railPieces[0],
        [Direction.W]: railPieces[1],
      },
    };
    expect(surroundingRailPieces).toEqual(expectedSurrounding);
  });
});
