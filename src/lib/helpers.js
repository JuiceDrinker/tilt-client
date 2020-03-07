module.exports.convertSecondsToDisplay = timeInSeconds => {
  const hours = Math.floor(timeInSeconds / 3600);
  const mins = Math.floor((timeInSeconds / 60) % 60);
  const secs = Math.floor(timeInSeconds % 60);

  return `${hours}${mins}${secs}`;
};
