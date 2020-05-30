import calculateScore from './calculateScore';
// Removes balls from the series to be removed.

// Mutates given ballState
// Returns array of: ball state after removing ball series,
// and score by which player's counter should be increased.

const removeBallSeriesAndCalculateScore = (ballState, seriesToRemove, maxColors) => {
  const cellsToRemove = seriesToRemove.reduce((counter, series) => [...counter, ...series], []);
  const score = seriesToRemove.reduce((counter, series) => counter + calculateScore(series.length, maxColors));

  const newBallState = ballState.filter(ball => !cellsToRemove.includes(ball.cell));
  return [newBallState, score];
};

export default removeBallSeriesAndCalculateScore;
