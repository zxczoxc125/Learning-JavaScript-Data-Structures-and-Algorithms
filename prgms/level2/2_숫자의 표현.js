function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n / 2; i++) {
        let result = 0;
        let temp = i;
        while (true) {
            if (result >= n) { break; }
            result += temp++;
        }
        if (result === n) { answer++; }
    }

    return ++answer;
}

console.log(solution(15))