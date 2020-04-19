import actionTypes from './actionTypes';

export function newGame(maxColors) {
  return {
    type: actionTypes.NEW_GAME,
    maxColors
  };
}
