import React from 'react';
import { connect } from 'react-redux';
import { newGame } from './redux/actions';
import { isGameInProgress } from './redux/selectors';
import InfoLinks from './InfoLinks';

const possibleMaxColorValues = [5, 7, 9];

const mapStateToProps = (state) => {
  return {
    gameStarted: isGameInProgress(state),
    score: state.score
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newGame: (maxColors) => dispatch(newGame(maxColors))
  };
};

const ControlButtons = (props) => {
  const { gameStarted, score } = props;
  const [maxColors, setMaxColors] = React.useState(7);

  const handleChange = React.useCallback((ev) => {
    setMaxColors(parseInt(ev.target.value));
  }, [setMaxColors]);

  const handleClickNewGame = React.useCallback(() => {
    if (gameStarted) {
      const isConfirmed = window.confirm("Do you want to start a new game?");
      if (!isConfirmed) return;
    }

    props.newGame(maxColors);
  }, [maxColors, gameStarted]);

  const maxColorOptionElems = possibleMaxColorValues.map((value) => {
    return (
      <div className="max-color-option" key={value}>
        <input type="radio" name="max-colors" value={value.toString()} checked={maxColors === value} onChange={handleChange}/>
        <div className="max-color-label">{value}</div>
      </div>
    );
  });

  return (
    <div className='control-buttons'>
      <div>
        <strong>Score: {score}</strong>
      </div>
      <div>
        <button onClick={handleClickNewGame}>New game</button>
      </div>
      <div>
        <span className="max-color-desc-text">Colors:</span>
        {maxColorOptionElems}
      </div>
      <InfoLinks />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlButtons);
