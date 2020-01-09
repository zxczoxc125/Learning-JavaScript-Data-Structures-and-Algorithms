function solution(clothes) {
    const result = {};
    for (let i = 0; i < clothes.length; i++) {
        const propertyName = clothes[i][1];
        if (!result.hasOwnProperty(propertyName)) { result[propertyName] = []; }
        result[propertyName].push(clothes[i][0]);
    }

    let cnt = 1;
    Object.keys(result).forEach((key) => { cnt *= result[key].length + 1;});
    return cnt - 1;
}