import { concat, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

let firstReq = timer(3000).pipe(mapTo('First Response'));

// firstReq.subscribe(res => console.log(res));
// 3秒后
// First Response

let secondReq = timer(1000).pipe(mapTo('Second Response'));

// secondReq.subscribe(res => console.log(res));

concat(firstReq, secondReq).subscribe(res => console.log(res))
// 运行 ts-node operators_concat.ts
// 结果 类似同步 按顺序执行：
// 3秒后 First Response ---> 1秒后 Second Response
// First Response
// Second Response
