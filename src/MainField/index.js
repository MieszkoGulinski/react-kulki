import React from 'react';
import { connect } from 'react-redux';
import FieldRow from './FieldRow';
import Ball from './Ball';
import { fieldHeight } from '../gameConstants';

const mapStateToProps = (state) => {
  return {
    ballState: state.ballState
  };
};

const MainField = (props) => {
  let rowElems = [];
  for (let counter=0; counter < fieldHeight; counter++) {
    rowElems.push(
      <FieldRow key={counter} index={counter} />
    );
  }

  const ballElems = props.ballState.map((ballEntry) => (
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

export default connect(mapStateToProps)(MainField);
