function solution(n, m) {
    const gcd = getGCD(n, m);
    return [gcd, (n * m) / gcd];
}

function getGCD(n, m) {
    let big = Math.max(n, m);
    let small = Math.min(n, m);
    let nmg = big % small;
    while (nmg > 0) {
        const d = big - small;
        big = Math.max(small, d);
        small = Math.min(small, d);
        nmg = big % small;
    }
    return small;
}


/**
 * 다른 사람 코드
 * @param a
 * @param b
 * @returns {number}
 */
function greatestCommonDivisor(a, b) {
    return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);
}

// 재귀 + 최대공약수 구하는 과정 자체가 다름
// [바뀐 기준 + 나머지]만 있으면 됨