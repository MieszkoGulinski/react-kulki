import selectRandomEntries from '../gameCalculations/selectRandomEntries';
import { getFreeCellIndices, convertToCellState } from './selectors';
import { newBallsOnGameStart } from '../gameConstants';
import actionTypes from './actionTypes';
import createPath from '../gameCalculations/createPath';

// Ball state: array of objects in format:
// {id: 0, color: 4, cell: 4}
// id - ball id - necessary for keeping the same div for each ball during the gameplay, for animations
// color - ball color

// Pending movements: for animations. Array of pending single-step movements in format:
// {ball: 3, dest: 5}
// If there are pending movements, starting a move is disabled.

const initState = {
  ballState: [],
  selectedCell: null, // index of the selected cell
  pendingMovements: [],
  maxColors: 5,
  score: 0
};

const reducer = (state = initState, action) => {
  switch(action.type) {
  case actionTypes.NEW_GAME: {

    const cellsToFill = selectRandomEntries(getFreeCellIndices(state), newBallsOnGameStart);
    const ballState = cellsToFill.map((cell, counter) => {
      return {
        id: counter,
        color: Math.floor(Math.random() * action.maxColors + 1),
        cell,
      };
    });

    return {
      ...initState,
      ballState,
      maxColors: action.maxColors
    };
  }

  case actionTypes.HANDLE_CELL_CLICK: {
    if (state.ballState.find(ball => ball.cell === action.cellIndex)) {
      // click on a ball - select
      return {
        ...state,
        selectedCell: action.cellIndex
      };
    } else {
      if (state.selectedCell === null) return state;

      // click on a target cell
      const cellState = convertToCellState(state);
      const path = createPath(cellState, state.selectedCell, action.cellIndex);

      // later - perform the actual path transition
      console.log(path);
    }

    return {
      ...state,
    };
  }

  default: {
    return state;
  }
  }
};

export default reducer;
