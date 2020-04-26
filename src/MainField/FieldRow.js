import React from 'react';
import Cell from './Cell';
import { fieldWidth } from '../gameConstants';

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

export default React.memo(FieldRow);
