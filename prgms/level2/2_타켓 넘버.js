function solution(numbers, target) {
  let answer = 0
  function dfs(numbers, target, sum, idx) {
    if (idx >= numbers.length) {
      if (target === sum) answer++
      return
    }

    dfs(numbers, target, sum + numbers[idx], idx + 1)
    dfs(numbers, target, sum - numbers[idx], idx + 1)
  }
  dfs(numbers, target, 0, 0)
  return answer
}