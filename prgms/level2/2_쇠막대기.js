function solution(arrangement) {
    const newArrangement = arrangement.split('()').join('|');
    let stack = [];
    let result = 0;

    for (let i = 0; i < newArrangement.length; i++) {
        const str = newArrangement[i];
        if (str === '(') { stack.push(str); }
        if (str === '|') { result += stack.length; }
        if (str === ')') { stack.pop(); result++; }
    }

    return result;
}

console.log(solution('()(((()())(())()))(())')); // 17
'|(((||)(|)|))(|)'; // 17


