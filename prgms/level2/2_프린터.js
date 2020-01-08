function solution(priorities, location) {
    const newList = new Array(priorities.length).fill({idx: undefined, priority: undefined}).map((obj, i) => ({idx: i, priority: priorities[i]}));
    const printedList = [];
    while (newList.length) {
        const front = newList[0];
        let existBigger = false;
        for (let i = 1; i < newList.length && !existBigger; i++) { if (front.priority < newList[i].priority) { existBigger = true; } }

        if (!existBigger) {
            newList.shift();
            printedList.push(front);
        } else {
            newList.push(newList.shift());
        }
    }

    let result = 0;
    for (let i = 0; i < printedList.length; i++) {
        result++;
        if (printedList[i].idx === location) { break; }
    }
    return result;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1]	, 0));