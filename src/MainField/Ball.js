import React from 'react';
import { fieldHeight, fieldWidth, ballColors } from '../gameConstants';

const Ball = (props) => {
  const widthPercent = 100 / fieldWidth;
  const heightPercent = 100 / fieldHeight;

  const col = props.cell % fieldWidth;
  const row = Math.floor(props.cell / fieldWidth);

  const outerStyle = {
    width: `${widthPercent}%`,
    height: `${heightPercent}%`,
    left: `${widthPercent * col}%`,
    top: `${heightPercent * row}%`
  };
  const innerStyle = {
    background: ballColors[props.color - 1]
  };

  const handleClick = React.useCallback(() => {
    // select ball
  }, [props.id]);

  return (
    <div className="ball" style={outerStyle} onClick={handleClick}>
      <div className="ball-marker" style={innerStyle}>
        {props.color}
      </div>
    </div>
  );
};

export default React.memo(Ball);
