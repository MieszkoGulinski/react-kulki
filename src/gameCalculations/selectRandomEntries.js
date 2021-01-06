// Selects unique random entries from an array
// If specified number of entries is larger than input array length, returns
// all input entries in random order.

const selectRandomEntries = (inputArray, count) => {
  let result = [];
  let inputReduced = [...inputArray];

  for (let i=0; i<count; i++) {
    if (inputReduced.length > 0) {
      const index = Math.floor(Math.random() * inputReduced.length);

      result.push(inputReduced[index]);
      inputReduced.splice(index, 1);
    }
  }

  return result;
};

export default selectRandomEntries;
