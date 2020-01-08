function solution(dartResult) {
    let result = 0;
    const countList = [];
    const typeList = [];
    const optionList = [];
    for (let i = 0; i < dartResult.length; i++) {
        const s = dartResult[i];
        if (!isNaN(Number(s))) {
            if (s === '1' && dartResult[i + 1] === '0') { countList.push(10); }
            else if (!(s === '0' && dartResult[i - 1] === '1')) { countList.push(Number(s)); }

            if (isNaN(Number(dartResult[i - 1])) && isType(dartResult[i - 1])) { optionList.push(''); }
        } else {
            if (isType(s)) { typeList.push(s); }
            if (isOption(s)) { optionList.push(s); }
        }
    }
    if (isType(dartResult[dartResult.length - 1])) { optionList.push(''); }

    function isType(s) { return s === 'S' || s === 'D'|| s === 'T'; }
    function isOption(s) { return s === '*' || s === '#'; }

    const weighList = [1, 1, 1];
    for (let i = 0; i < optionList.length; i++) {
        if (optionList[i] === '*') {
            weighList[i] *= 2;
            weighList[i - 1] *= 2;
        } else if (optionList[i] === '#') { weighList[i] *= -1; }
    }

    for (let i = 2; i >= 0; i--) { result += Math.pow(countList[i], getTypeWeight(typeList[i])) * weighList[i]; }
    function getTypeWeight(type) { return {S: 1, D: 2, T: 3}[type]; }

    return result;
}