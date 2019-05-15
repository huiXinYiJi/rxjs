import { BehaviorSubject } from 'rxjs';

const subject = new BehaviorSubject(0); // 0 is the initial value

subject.subscribe({
  next: v => console.log(`Observer1: ${v}`)
});

subject.next(1);
subject.next(2);

subject.subscribe({
  next: v => console.log(`Observer2: ${v}`)
});

subject.next(3);

// 运行 ts-node behavior-subject.ts
// 结果：
// Observer1: 0
// Observer1: 1
// Observer1: 2

// Observer2: 2

// Observer1: 3
// Observer2: 3