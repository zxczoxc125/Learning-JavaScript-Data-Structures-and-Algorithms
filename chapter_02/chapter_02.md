 # ✅ chapter_02
## Array.prototype.push()
> 복수개 가능
``` javascript 
array.push(1, 2, 3);
```
## Array.prototype.unshift()
> 배열 앞부분에 push
``` javascript
const array = [1, 2, 3];
array.unshift(0); // array = [0, 1, 2, 3] 
array.unshift(-3, -2, -1); // array = [-3, -2, -1, 0, 1, 2, 3] 
```
## Array.prototype.shift()
> 배열 앞부분에 pop
``` javascript
const array = [1, 2, 3];
array.shift(0); // array = [2, 3] 
```
## Array.prototype.splice() 활용
> 세번째 이상 매개변수는 넣을 데이터를 의미
``` javascript
const array = [1, 2, 3];
array.splice(1, 0, 100, 200, 300); // array = [1, 100, 200, 300, 2, 3] 
```
## Array.prototype.every()
> 주어진 조건 결과가 false가 될때'까지' 함수 호출
## Array.prototype.some()
> 주어진 조건 결과가 true가 될때'까지' 함수 호출
## Array.prototype.forEach()
> ** 주어진 조건 결과와 상관없이 모두 호출
## Array.prototype.reduce()
> 누적 함수
``` javascript
const array = [1, 2, 3, 4, 5];
cosnt result = array.reduce((prev, next, index) => {
    return prev + next;
}, 100);
// result = 115 (초기값 100 + 누적 계산결과 15)
```
## Array.prototype.sort(), Array.prototype.reverse()
> 함수를 넣어주지 않을 시, 문자열로 비교하기 때문에 아래와 같이 사용해야 함
``` javascript
const array = [4, 13, 11, 5, 1, 4, 5, 2, 10, 11, 15];
array.sort((prev, next) => {
    return prev - next;
}); // reverse는 결과만 반대
```
> 위 예시 말고도, 다양한 형태의 타입, 정렬방식을 사용해 정렬이 가능
