/**
 * Stack 생성자
 * @constructor
 */
const Stack = function () {
    let items = [];

    this.push = (el) => {
        items.push(el);
    };
    this.size = () => {
        return items.length;
    };
    this.clear = () => {
        items = [];
    };
    this.print = () => {
        console.log(items.toString());
    };
    this.pop = () => {
        return items.pop();
    };
    this.peek = () => {
        return items[items.length - 1];
    };
    this.isEmpty = () => {
        return items.length === 0;
    };
    this.join = (separator) => {
        return items.join(separator);
    };
};

/**
 * 2진수 변환
 * @param number
 * @returns {string|string}
 */
const trans2 = (number) => {
    const stack = new Stack();
    while (number / 2 !== 0) {
        const remain = number % 2;
        number = Math.floor(number / 2);
        stack.push(remain);
    }

    let result = '';
    while (!stack.isEmpty()) {
        result += stack.pop();
    }
    return result;
};
console.log(trans2(233)); // 11101001
console.log(trans2(10)); // 1010
console.log(trans2(1000)); // 1111101000

/**
 * n진수 변환
 * @param number
 * @param n
 * @returns {string|string}
 */
const transN = (number, n) => {
    const digits = '0123456789ABCDEF';

    const stack = new Stack();
    while (number / n !== 0) {
        const remain = number % n;
        number = Math.floor(number / n);
        stack.push(digits[remain]);
    }

    let result = '';
    while (!stack.isEmpty()) {
        result += stack.pop();
    }
    return result;
};
console.log(transN(100345, 2)); // 11000011111111001
console.log(transN(100345, 8)); // 303771
console.log(transN(100345, 16)); // 187F9
