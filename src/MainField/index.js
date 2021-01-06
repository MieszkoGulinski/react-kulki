import React from 'react';
import { connect } from 'react-redux';
import FieldRow from './FieldRow';
import Ball from './Ball';
import { fieldHeight, singleMovementTimeMs } from '../gameConstants';
import { performMove } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    ballState: state.ballState,
    pendingMovements: state.pendingMovements
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    performPendingMovement: () => dispatch(performMove())
  };
};

const MainField = (props) => {
  const {pendingMovements, ballState, performPendingMovement} = props;

  React.useEffect(() => {
    if (pendingMovements.length > 0) {
      setTimeout(performPendingMovement, singleMovementTimeMs);
    }
  }, [pendingMovements]);

  let rowElems = [];
  for (let counter=0; counter < fieldHeight; counter++) {
    rowElems.push(
      <FieldRow key={counter} index={counter} />
    );
  }

  const ballElems = ballState.map((ballEntry) => (
    <Ball key={ballEntry.id} id={ballEntry.id} cell={ballEntry.cell} color={ballEntry.color}/>
  ));

  return (
    <div className="game-field-wrapper">
      <div className="game-field-outer">
        <div className="game-field-inner">
          {rowElems}
          {ballElems}
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainField);
