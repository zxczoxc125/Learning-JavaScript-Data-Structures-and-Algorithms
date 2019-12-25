/**
 * 1. 버블 정렬
 * @param array
 */
const bubbleSort = () => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            sort(i, j);
        }
    }
}

const sort = (i, j) => {
    if (array[i] < array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const array = [1, 100, 4, 10, 56];
bubbleSort();
console.log(array)