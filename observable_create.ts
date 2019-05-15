// https://cn.rx.js.org/class/es6/Observable.js~Observable.html#static-method-create
import { Observable } from 'rxjs';

function getDate () {
  let persons = [
    { name: 'Dave', age: 34, salary: 2000 },
    { name: 'Nick', age: 37, salary: 32000 },
    { name: 'Howie', age: 40, salary: 26000 },
    { name: 'Brian', age: 40, salary: 30000 },
    { name: 'Kevin', age: 47, salary: 24000 }
  ];

  return Observable.create(
    observer => { // subscribe function
      persons.forEach(p => observer.next(p));
      observer.complete();
    }
  )
}

getDate().subscribe(
  person => console.log(person.name),
  err => console.error(err),
  () => console.log("Streaming is over.")
)

// 运行 ts-node observable_create.ts
// 结果：
// Dave
// Nick
// Howie
// Brian
// Kevin
// Streaming is over.
