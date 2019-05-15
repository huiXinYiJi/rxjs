import { Observable, from as ObFrom } from 'rxjs';
// 首先npm install --save rxjs-compat@6 向后兼容，再引入map和reduce
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/reduce';

let persons = [
  { name: 'Dave', age: 34, salary: 2000 },
  { name: 'Nick', age: 37, salary: 32000 },
  { name: 'Howie', age: 40, salary: 26000 },
  { name: 'Brian', age: 40, salary: 30000 },
  { name: 'Kevin', age: 47, salary: 24000 }
];

ObFrom(persons).map(p => p['salary'])
  .reduce((total, current) => total+ current, 0)
  .subscribe(
      totalSalary => console.log(`Total salary is ${totalSalary}`),
      err => console.log(err)
  );

// 运行 ts-node observable_operator.ts
// 结果:
// Total salary is 114000
