import { interval } from 'rxjs';
import { take, mergeMap, switchMap, map } from 'rxjs/operators';

const outer = interval(1000).pipe(take(2));

const combined = outer.pipe(mergeMap(x => {
  return interval(400).pipe(take(3)).pipe(map(y => `outer ${x}: inner ${y}`));
}));

// combined.subscribe(res => console.log(`result ${res}`));

// 运行 ts-node mergeMap_switchMap.ts
// 结果：
// result outer 0: inner 0
// result outer 0: inner 1
// result outer 0: inner 2
// result outer 1: inner 0
// result outer 1: inner 1
// result outer 1: inner 2

const combined1 = outer.pipe(switchMap(x => {
  return interval(400).pipe(take(3)).pipe(map(y => `outer ${x}: inner ${y}`));
}));

combined1.subscribe(res => console.log(`result ${res}`));

// 运行 ts-node mergeMap_switchMap.ts
// 结果：
// result outer 0: inner 0
// result outer 0: inner 1
// result outer 1: inner 0
// result outer 1: inner 1
// result outer 1: inner 2
