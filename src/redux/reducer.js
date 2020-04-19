import actionTypes from './actionTypes';

// Ball state: array of objects in format:
// {id: 0, color: 4, cell: 4}
// id - ball id - necessary for keeping the same div for each ball during the gameplay, for animations
// color - ball color

// Pending movements: for animations. Array of pending single-step movements in format:
// {ball: 3, dest: 5}
// If there are pending movements, starting a move is disabled.

const initState = {
  ballState: [],
  selectedBall: null,
  pendingMovements: [],
  maxColors: 5,
  score: 0
};

const reducer = (state = initState, action) => {
  switch(action.type) {
  case actionTypes.NEW_GAME: {
    return {
      ...initState,
      maxColors: action.maxColors
    };
  }
  default: {
    return state;
  }
  }
};

export default reducer;
