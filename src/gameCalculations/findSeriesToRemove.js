import { fieldWidth, fieldHeight, minSeriesLength } from '../gameConstants';
import { convertToCellStateUncached } from '../redux/selectors';
import convertToRunLength from './convertToRunLength';

// Finds series of balls to remove
// Output: array of arrays of cells from which balls have to be removed
// where the inner array contains cells in a single series

// Examples:
// No sequences to remove: []
// One sequence to remove: [[4,5,6,7,8]]
// Two sequences to remove: [[0,1,2,3,4], [18,19,20,21,22]]

// There are cases where series can have overlapping cells, for example:
// [[2,11,20,29,38], [2,3,4,5,6]]
// This can happen when there are two series of 4 identical colors each, one in a row,
// starting at cell 3 (one step right from cell 2), and another starting at cell 11
// (one step below cell 2). Then player moves a ball of the matching color to cell 2,
// creating both a 5-ball series in a row and a 5-ball series on a column. Both series
// are counted independently.

const findSeriesToRemove = (ballState) => {
  const cellState = convertToCellStateUncached(ballState);

  let result = [];

  // check rows
  for (let rowIndex = 0; rowIndex < fieldHeight; rowIndex++) {
    let rowCells = [];

    for (let rowCellIndex = 0; rowCellIndex < fieldWidth; rowCellIndex++) {
      const cellIndex = rowIndex * fieldWidth + rowCellIndex;
      rowCells.push(cellIndex);
    }

    result = [...result, ...convertToRunLength(cellState, rowCells, minSeriesLength)];
  }

  // check columns
  for (let colIndex = 0; colIndex < fieldWidth; colIndex++) {
    let columnCells = [];

    for (let colCellIndex = 0; colCellIndex < fieldWidth; colCellIndex++) {
      const cellIndex = colCellIndex * fieldWidth + colIndex;
      columnCells.push(cellIndex);
    }

    result = [...result, ...convertToRunLength(cellState, columnCells, minSeriesLength)];
  }

  // check diagonal left/top to right/bottom
  for (let startColIndex = -fieldHeight; startColIndex < fieldWidth; startColIndex++) {
    let columnCells = [];

    for (let rowIndex = 0; rowIndex < fieldHeight; rowIndex++) {
      const colIndex = startColIndex + rowIndex;
      if (colIndex >= 0 && colIndex < fieldWidth) {
        const cellIndex = rowIndex * fieldWidth + colIndex;
        columnCells.push(cellIndex);
      }
    }

    result = [...result, ...convertToRunLength(cellState, columnCells, minSeriesLength)];
  }

  // check diagonal right/top to left/bottom
  for (let startColIndex = fieldWidth + fieldHeight - 1; startColIndex >= 0; startColIndex--) {
    let columnCells = [];

    for (let rowIndex = 0; rowIndex < fieldHeight; rowIndex++) {
      const colIndex = startColIndex - rowIndex;
      if (colIndex >= 0 && colIndex < fieldWidth) {
        const cellIndex = rowIndex * fieldWidth + colIndex;
        columnCells.push(cellIndex);
      }
    }

    result = [...result, ...convertToRunLength(cellState, columnCells, minSeriesLength)];
  }
  return result;
};

export default findSeriesToRemove;
