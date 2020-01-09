function solution(s) {
    const numList = s.split(' ').map(str => Number(str));
    return [Math.min(...numList), Math.max(...numList)].join(' ');
}