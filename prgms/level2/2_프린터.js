function solution(priorities, location) {
    const newList = priorities.map((priority, i) => ({idx: i, priority}));
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

// some이 boolean을 리턴하는 것을 이용한 사람도 있었다.