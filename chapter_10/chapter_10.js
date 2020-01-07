const array = [3, 22, 100, 4, 10, 56, 10];

/**
 * 1. 버블 정렬
 */
const bubbleSort = () => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            sort_bubble(j, j + 1);
        }
    }
}

const sort_bubble = (i, j) => {
    if (array[i] < array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// console.log(array);
// bubbleSort();
// console.log(array);

/**
 * 2. 선택 정렬
 */
const selectionSort = () => {
    for (let i = 0; i < array.length; i++) {
        let minIdx = i;
        for (let j = i; j < array.length; j++) {
            if (array[minIdx] > array[j]) {
                minIdx = j;
            }
        }

        const temp = array[minIdx];
        array[minIdx] = array[i];
        array[i] = temp;
    }
}

// console.log(array);
// selectionSort();
// console.log(array);

/**
 * 삽입 정렬
 */
const insertSort = () => {
    for (let i = 1; i < array.length; i++) {
        const std = array[i];
        let cnt = 0;
        for (let j = i; j >= 0 && array[j - 1] < std; j--) {
            array[j] = array[j - 1];
            cnt++;
        }
        array[i - cnt] = std;
    }
}

// console.log(array);
// insertSort();
// console.log(array);


/**
 * 병합 정렬
 */
const mergeSort = (array, left, right) => {
    if (left < right) {
        const mid = (left + right) / 2;
        mergeSort(left, mid);
        mergeSort(mid + 1, right);

    }
}


const union = (array1, array2) => {
    // array1, array2,는 각각 순서 보장이 되어 있다고 생각
    const biggerList = array2.length > array1.length ? array2 : array1;
    const smallerList = biggerList === array1 ? array2 : array1;

    const list = [];
    for (let i = 0; i < smallerList.length; i++) {
        const bigger = Math.max(smallerList[i], biggerList[i]);
        const smaller = Math.min(smallerList[i], biggerList[i]);
        list.push(smaller);
        list.push(bigger);
    }

    const bigger_lastOne = biggerList[biggerList.length - 1];
    const currentLast = list[list.length - 1];
    if (currentLast < bigger_lastOne) {
        list.push(bigger_lastOne);
    } else {
        list.pop();
        list.push(bigger_lastOne);
        list.push(currentLast);
    }
    return list;
}


// console.log(array);
// mergeSort(array, 0, array.length - 1);
// console.log(array);
// console.log(array);
// insertSort();
// console.log(array);


const mergeSort = () => {

}

console.log(array);
mergeSort();
console.log(array);