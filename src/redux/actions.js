import actionTypes from './actionTypes';

export function newGame(maxColors) {
  return {
    type: actionTypes.NEW_GAME,
    maxColors
  };
}

export function handleCellClick(cellIndex) {
  return {
    type: actionTypes.HANDLE_CELL_CLICK,
    cellIndex
  };
}

export function performMove() {
  return {
    type: actionTypes.PERFORM_MOVE,
  };
}
