module.exports.convertSecondsToDisplay = timeInSeconds => {
  const zeroConcat = time => {
    if (time.toString().length === 1) return `0${time}`;
    else return time;
  };
  const hours = zeroConcat(Math.floor(timeInSeconds / 3600));
  const mins = zeroConcat(Math.floor(timeInSeconds / 60) % 60);
  const secs = zeroConcat(Math.floor(timeInSeconds % 60));

  return `${hours}:${mins}:${secs}`;
};
