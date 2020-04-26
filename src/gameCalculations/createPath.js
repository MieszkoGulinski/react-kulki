import getNeighboringCellIndices from './getNeighboringCellIndices';

// Creates a spanning tree on the game grid, starting from a given start cell.
// Output format: object with entries
// startCell : [endCell1, endCell2, endCell3 ...]
// where there exists a 1-step path from given start cell to each end cell

const createSpanningTree = (cellState, startCell) => {
  let resultTree = {};
  let alreadyProcessedCells = [startCell];
  let cellsToStartFromInCurrentIteration = [startCell];

  while (cellsToStartFromInCurrentIteration.length > 0) {
    let cellsToStartFromInNextIteration = [];

    cellsToStartFromInCurrentIteration.forEach(stepStartCell => {
      const neighboringCells = getNeighboringCellIndices(stepStartCell);

      const nextStepCells = neighboringCells
        .filter(cell => cellState[cell] === 0)
        .filter(cell => !alreadyProcessedCells.includes(cell));

      resultTree[stepStartCell] = nextStepCells;
      alreadyProcessedCells = [...alreadyProcessedCells, ...nextStepCells];
      cellsToStartFromInNextIteration = [
        ...cellsToStartFromInNextIteration,
        ...nextStepCells,
      ];
    });

    cellsToStartFromInCurrentIteration = cellsToStartFromInNextIteration;
  }

  return resultTree;
};

// Creates a path from startCell to endCell
// Returns null if a path is not possible
// cellState - format: see convertToCellState in selectors.js

const createPath = (cellState, startCell, endCell) => {
  // backtrack from endCell to startCell
  const pathTree = createSpanningTree(cellState, startCell);
  console.log('createSpanningTree', pathTree)
  let path = [endCell];

  let stepEnd = endCell;
  while (stepEnd !== startCell) {
    const stepStartStr = Object.keys(pathTree).find(startCell => pathTree[startCell].includes(stepEnd));
    if (stepStartStr === undefined) return null; // endCell not in tree

    const stepStart = parseInt(stepStartStr);
    path.push(stepStart);
    stepEnd = stepStart;
  }

  path.reverse();

  return path;
};

export default createPath;
