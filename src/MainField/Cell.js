import React from 'react';
import { connect } from 'react-redux';
import { handleCellClick } from '../redux/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    handleCellClick: (index) => dispatch(handleCellClick(index))
  };
};

const Cell = (props) => {
  const handleClick = React.useCallback(() => {
    props.handleCellClick(props.index);
  }, [props.index]);

  return (
    <div className="game-cell" onClick={handleClick}>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Cell);
