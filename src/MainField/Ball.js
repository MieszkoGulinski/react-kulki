import React from 'react';
import { connect } from 'react-redux';
import { fieldHeight, fieldWidth, ballStylesByColor } from '../gameConstants';
import { handleCellClick } from '../redux/actions';

const mapStateToProps = (state, ownProps) => {
  return {
    isSelected: state.selectedCell === ownProps.cell
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCellClick: (index) => dispatch(handleCellClick(index))
  };
};

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

  const innerStyle = ballStylesByColor[props.color - 1];

  const handleClick = React.useCallback(() => {
    props.handleCellClick(props.cell);
  }, [props.cell]);

  const cssClass = props.isSelected? 'ball active' : 'ball';

  return (
    <div className={cssClass} style={outerStyle} onClick={handleClick}>
      <div className="ball-marker" style={innerStyle}>
        {props.color}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Ball));
