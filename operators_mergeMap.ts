import { Observable } from 'rxjs';
// import { mergeMap } from 'rxjs/operators';
import 'rxjs/add/operator/mergeMap';
import { from } from 'rxjs/observable/from';

function getData() {
  const students = from([
    { name: 'Dave', age: 17 },
    { name: 'Nick', age: 18 },
    { name: 'Lee', age: 15 }
  ]);
  const teachers = from([
    { name: 'Miss Wan', age: 28 },
    { name: 'Mrs Wang', age: 31 },
  ]);
  return Observable.create(
    observer => {
      observer.next(students);
      observer.next(teachers);
    }
  )
}

// if use: import { mergeMap } from 'rxjs/operators';
// getData().pipe(mergeMap(persons => persons)).subscribe(
//   p => console.log(`Subscriber got ${p.name} - ${p.age}`)
// );

// if use: import 'rxjs/add/operator/mergeMap';
getData().mergeMap(persons => persons).subscribe(
  p => console.log(`Subscriber got ${p.name} - ${p.age}`)
);

// 运行 ts-node operators_mergeMap.ts
// 结果：
// Subscriber got Dave - 17
// Subscriber got Nick - 18
// Subscriber got Lee - 15
// Subscriber got Miss Wan - 28
// Subscriber got Mrs Wang - 31