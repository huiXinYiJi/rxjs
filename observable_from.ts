import { Observable, from as ObFrom } from "rxjs"; // 对于rxjs 6.0以上版本（本例引用此）
// 对于rxjs 5.0~6.0版本用以下引用
// import { Observable } from "rxjs/Observable";
// import 'rxjs/add/observable/from';
// 使用：Observable.from()


let persons = [
  { name: 'Dave', age: 34, salary: 2000 },
  { name: 'Nick', age: 37, salary: 32000 },
  { name: 'Howie', age: 40, salary: 26000 },
  { name: 'Brian', age: 40, salary: 30000 },
  { name: 'Kevin', age: 47, salary: 24000 }
];

let index = 1;

// Observable.from(persons).subscribe( // 5.0~6.0版本使用
ObFrom(persons).subscribe( // 6.0以上版本使用
  person => {
    console.log(index++, person);
  },
  err => console.log(err),
  () => console.log("Streaming is over.")
)

// 运行 ts-node observable_from.ts
// 结果：
// 1 { name: 'Dave', age: 34, salary: 2000 }
// 2 { name: 'Nick', age: 37, salary: 32000 }
// 3 { name: 'Howie', age: 40, salary: 26000 }
// 4 { name: 'Brian', age: 40, salary: 30000 }
// 5 { name: 'Kevin', age: 47, salary: 24000 }
// Streaming is over.
