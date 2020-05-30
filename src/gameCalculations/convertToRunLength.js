// For specified cells, converts to an array of arrays of indices of cells. Inner arrays
// contain indices of cells that are adjacent and have identical ball value. Series of zeros
// (no ball) are skipped, and too short series (below minLength) are skipped too.

// For example, let's check the second row from the top, and consider no filtering by minLength
// For specified cell indices to check:
// [9, 10, 11, 12, 13, 14, 15, 16, 17] (in indicesToCheck)
// having values respectively:
// 1,  1,  2,  2,  3,  3,  3,  3,  4
// meaning that cellState[9]===1, cellState[10]===1, cellState[11]===2 etc.
// the result will be:
// [[9,10], [11,12], [13,14,15,16], [17]]

// For values:
// 1, 1, 0, 0, 3, 3, 3, 3, 0
// the result will be:
// [[9, 10], [13, 14, 15, 16]]
// after filtering of zeros, but without filtering by minLength

// An input with no series will result in an array of single-element arrays:
// 1, 2, 1, 2, 1, 2, 1, 2, 1
// [[9], [10], [11], [12], [13], [14], [15], [16], [17]]

const convertToRunLength = (cellState, indicesToCheck, minLength) => {
  let lastValue = null;
  let result = [];

  for (let i=0; i<indicesToCheck.length; i++) {
    const index = indicesToCheck[i];

    const ball = cellState[index];
    if (ball === lastValue) {
      let lastArray = result[result.length - 1];
      lastArray.push(index);
    } else {
      result.push([index]);
      lastValue = ball;
    }
  }

  const resultFiltered = result.filter(series => {
    const index = series[0];
    if (series.length < minLength) return false;
    if (cellState[index] === 0) return false;
    return true;
  });

  return resultFiltered;
};

export default convertToRunLength;
