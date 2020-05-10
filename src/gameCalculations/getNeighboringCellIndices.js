import {fieldWidth, fieldHeight} from '../gameConstants';

// Returns neighboring cell indices.
// Allowed directions: up, down, left, right
// Result: array of 2, 3 or 4 entries; 2 - for cell in a corner

const getNeighboringCellIndices = index => {
  const x = index % fieldWidth;
  const y = Math.floor(index / fieldWidth);

  let result = [];

  if (y > 0) result.push(index - fieldWidth); // one up
  if (y < fieldHeight - 1) result.push(index + fieldWidth); // one down
  if (x > 0) result.push(index - 1); // one left
  if (x < fieldWidth - 1) result.push(index + 1); // one right

  return result;
};

export default getNeighboringCellIndices;
