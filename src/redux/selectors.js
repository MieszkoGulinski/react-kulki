import { createSelector } from 'reselect';
import {fieldSize} from '../gameConstants';

// Base selectors
const selectBallState = state => state.ballState;

// Converts ball state to cell state.
// Format of ball state: see reducer.js
// Format of cell state: array of numbers, one item for each cell, meaning:
// 0 = empty, 1, 2, 3 = occupied by a ball with color 1, 2, 3... respectively
export const convertToCellState = createSelector(
  selectBallState,
  (ballState) => {
    let cellState = (new Array(fieldSize)).fill(0);

    ballState.forEach((ballEntry) => {
      const {color, cell} = ballEntry;
      cellState[cell] = color;
    });

    return cellState;
  }
);
