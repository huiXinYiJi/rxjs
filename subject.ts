import { Subject } from 'rxjs';

const subject = new Subject<number>();

const subscriber1 = subject.subscribe({
  next: (v) => console.log(`observaer 1: ${v}`)
});

const subscriber2 = subject.subscribe({
  next: (v) => console.log(`observaer 2: ${v}`)
});

subject.next(1);
subscriber2.unsubscribe();
subject.next(2);

const subscriber3 =  subject.subscribe({
  next: (v) => console.log(`observaer 3: ${v}`)
});

subject.next(3);

// 运行 ts-node subject.ts
// 结果：
// observaer 1: 1
// observaer 2: 1
// observaer 1: 2
// observaer 1: 3
// observaer 3: 3
