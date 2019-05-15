import { merge, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

let firstReq = timer(3000).pipe(mapTo('First Response'));
let secondReq = timer(1000).pipe(mapTo('Second Response'));

merge(firstReq, secondReq).subscribe(res => console.log(res));

// 运行 ts-node operators_merge.ts
// 结果：类似异步 不分前后
// Second Response
// First Response
