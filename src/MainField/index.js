import React from 'react';
import { connect } from 'react-redux';
import Cell from './Cell';
import Ball from './Ball';
import { fieldHeight, fieldWidth } from '../gameConstants';

const mapStateToProps = (state) => {
  return {
    ballState: state.ballState
  };
};

const FieldRow = (props) => {
  let cellElems = [];
  for (let counter=0; counter < fieldWidth; counter++) {
    cellElems.push(
      <Cell key={counter} index={counter + props.index * fieldWidth} />
    );
  }

  return (
    <div className="game-field-row">
      {cellElems}
    </div>
  );
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
