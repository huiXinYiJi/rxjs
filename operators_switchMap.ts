import { timer, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// 0秒后，每隔5秒发出值
const source = timer(0, 3000);

const example = source.pipe(switchMap(() => interval(500)))

const subscribe = example.subscribe(val => console.log(val));

// 运行 ts-node operators_switchMap.ts
// 结果：
// 0,1,2,3,4...0,1,2,3,4...0,1,2,3,4
