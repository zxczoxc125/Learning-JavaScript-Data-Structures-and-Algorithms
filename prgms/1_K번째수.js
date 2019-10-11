function solution(array, commands) {
    let answer = [];
    commands.forEach((item) => {
        const result = array.slice(item[0] - 1, item[1]).sort((a, b) => {return a - b})[item[2] - 1];
        answer.push(result);
    });
    return answer;
}
