import { convertToCellStateUncached, getFreeCellIndicesUncached, getLargestBallIdUncached } from '../redux/selectors';
import { newBallsAfterMove } from '../gameConstants';

const addNewBalls = (ballState, maxColors) => {
  const cellState = convertToCellStateUncached(ballState);
  const freeCellIndices = getFreeCellIndicesUncached(cellState);

  let newBallCellIndices = []; // index of target cell
  for (let i=0; i<newBallsAfterMove; i++) {
    // handles case when there are not enough cells left, close to the end of the game
    if (freeCellIndices.length > 0) {
      const index = Math.floor(Math.random() * freeCellIndices.length);
      // index of entry in freeCellIndices array
      newBallCellIndices.push(freeCellIndices[index]);
      freeCellIndices.splice(index, 1);
    }
  }

  const newBallState = [...ballState];
  const largestId = getLargestBallIdUncached(newBallState);

  newBallCellIndices.forEach((cell, counter) => {
    newBallState.push({
      id: largestId + counter + 1,
      color: Math.floor(Math.random() * maxColors + 1),
      cell
    });
  });

  return newBallState;
};

export default addNewBalls;
