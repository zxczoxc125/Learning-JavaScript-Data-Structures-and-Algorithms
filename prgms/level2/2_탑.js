function solution (heights) {
    const result = [];
    for (let i = heights.length - 1; i >= 0; i--) {
        const height = heights[i];
        let isGone = false;
        for (let j = i - 1; j >= 0; j--) {
            if (height < heights[j]) {
                result.unshift(j + 1);
                isGone = true;
                break;
            }
        }
        if (!isGone) { result.unshift(0); }
    }
    return result;
}


/**
 * 다른 사람 코드
 * @param heights
 * @returns {Uint8Array | BigInt64Array | any[] | Float64Array | Int8Array | Float32Array | Int32Array | Uint32Array | Uint8ClampedArray | BigUint64Array | Int16Array | Uint16Array}
 */
function solution(heights) {
    return heights.map((v, i) => {
        while (i) {
            i--;
            if (heights[i] > v) { return i + 1; }
        }
        return 0;
    });
}

// 1. while문 간결하게
// 2. 이중 for문 위 처럼 간단하게 표현 가능