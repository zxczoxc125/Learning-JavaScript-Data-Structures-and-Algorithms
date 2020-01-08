function solution(d, budget) {
    const sortedD = d.sort((a, b) => a - b);
    let result = 0;
    for (let i = 0; i < sortedD.length && budget >= sortedD[i]; i++) {
        if (sortedD[i] <= budget) {
            budget -= sortedD[i];
            result++;
        }
    }
    return result;
}


/**
 * 다른 사람 코드
 * @param d
 * @param budget
 * @returns {*}
 */
function solution(d, budget) {
    d.sort((a, b) => a - b);
    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();
    return d.length;
}

// reduce 활용