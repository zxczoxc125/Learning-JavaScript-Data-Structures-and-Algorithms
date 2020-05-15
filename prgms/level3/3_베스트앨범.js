function solution(genres, plays) {
  const answer = [];
  const dicArray = [];
  const InfoDic = function (genre) {
    this.genre = genre;
    this.sum = 0;
    this.musicArray = [];
  }
  const IdCount = function (id, count) {
    this.id = id;
    this.count = count;
  }

  genres.forEach((genre, idx) => {
    if (!dicArray.some((infoDic) => infoDic.genre === genre )) {
      dicArray.push(new InfoDic(genre));
    }

    const targetInfoDic = dicArray[dicArray.findIndex(dic => dic.genre === genre)];
    targetInfoDic.sum += plays[idx];
    targetInfoDic.musicArray.push(new IdCount(idx, plays[idx]));
  });

  dicArray.sort((prevDic, nextDic) => nextDic.sum - prevDic.sum);
  dicArray.forEach(dic => {
    dic.musicArray.sort((prevMusic, nextMusic) => {
      const prevCount = prevMusic.count;
      const nextCount = nextMusic.count;

      if (prevCount !== nextCount) {
        return nextCount - prevCount;
      } else {
        return prevMusic.id - nextMusic.id;
      }
    });
  });

  dicArray.forEach(dic => {
    answer.push(dic.musicArray[0].id);
    if (dic.musicArray[1]) {
      answer.push(dic.musicArray[1].id);
    }
  });

  return answer;
}

console.dir(solution(['classic', 'pop', 'classic', 'ss'], [500, 600, 150, 222222222222])); // [4, 1, 3, 0]