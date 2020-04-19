import React from 'react';

const Cell = (props) => {
  const handleClick = React.useCallback(() => {
    // handle click
  }, [props.index]);

  return (
    <div className="game-cell" onClick={handleClick}>
    </div>
  );
};

export default Cell;
