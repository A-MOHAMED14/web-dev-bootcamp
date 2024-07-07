// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function (arr) {
  const ascArr = arr.sort((a, b) => a - b);

  const maxDuration = 60;
  let sum = 0;
  let numOfSongs = 0;

  for (let i = 0; i < ascArr.length; i++) {
    const currentDuration = ascArr[i];

    if (sum + currentDuration <= maxDuration) {
      sum += currentDuration;
      numOfSongs++;
    } else {
      break;
    }
  }

  return numOfSongs;
};
