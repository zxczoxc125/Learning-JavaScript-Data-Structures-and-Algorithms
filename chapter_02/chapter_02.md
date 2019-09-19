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
array.shift(0); // array = [0, 1, 2, 3] 
```
## Array.prototype.splice() 활용
> 세번째 이상 매개변수는 넣을 데이터를 의미
``` javascript
const array = [1, 2, 3];
array.splice(1, 0, 100, 200, 300); // array = [1, 100, 200, 300, 2, 3] 
```
