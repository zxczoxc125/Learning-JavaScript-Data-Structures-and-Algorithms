# ✅ chapter_01
## 동등 연산자(== / ===)
> 내장 메서드 toNumber, toPrimitive를 사용. 최종적으로 toNumber로 변환된 결과로 비교
## prototype 메서드 vs class-based 메서드
* prototype 메서드
``` javascript 
Book.prototype.protoFunc = function () { ... }
```
> 1. 함수 사본은 1개
> 2. public
> 3. 인스턴스에 사본을 할당하는 측면에서 메모리 절감
* class-based 메서드   
```javascript 
function Book {
    this.classBasedFunc = function () { ... }
}
```
> 1. 함수 사본은 각 인스턴스마다
> 2. private
