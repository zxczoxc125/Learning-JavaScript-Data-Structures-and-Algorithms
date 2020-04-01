function solution(s) {
  return s
    .split(' ')
    .map(item => {
      return item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase();
    })
    .join(' ');
}

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));