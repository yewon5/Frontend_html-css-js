/*
import number, {hello, str, arr, func} from './module.js'; //module.js 가져오기
console.log("main.js : ", hello);

//const str_main = "여기는 main.js 입니다.";

const parent = document.querySelector(".parent");
console.log(parent.innerHTML);

console.log(number);
console.log(str);
console.log(arr);
console.log(func); //함수 데이터 출력. console.log(func());함수 호출.
*/


/*
//가져올 데이터가 많을 경우
import * as mod from './module.js';

console.log(mod.hello);
console.log(mod.str);
console.log(mod.arr);
console.log(mod.func);
console.log(mod.default);
*/


//가져올 js파일이 많을 경우
//import {a} from './a.js';
//import {b} from './b.js';
import {a, b} from './util.js'; //중간역할. js파일을 만들어서 위의 2개 코드를 넣고 한 번에 불러온다.

console.log(a());
console.log(b());