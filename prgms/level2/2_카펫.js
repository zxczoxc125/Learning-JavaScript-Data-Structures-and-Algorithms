function solution(brown, red) {
  const result = [];
  let redHeight = 1;
  let isLoop = true;

  while (redHeight <= Math.floor(Math.sqrt(red)) && isLoop) {
    if (red % redHeight === 0) {
      const brownHeight = redHeight + 2;
      const brownWidth = (red / redHeight) + 2;

      if (brownHeight * brownWidth === brown + red) {
        result[0] = brownWidth;
        result[1] = brownHeight;
        isLoop = false;
      }
    }
    redHeight++;
  }
  return result;
}