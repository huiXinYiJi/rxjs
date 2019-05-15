import { Observable, interval } from 'rxjs';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/share';

const numbers = interval(1000).take(5).share();

function subscribeToNumbers(name) {
  numbers.subscribe(
    x => console.log(`${name}: ${x}`)
  )
}

subscribeToNumbers('Dave');
// 单独结果：
// Dave: 0
// Dave: 1
// Dave: 2
// Dave: 3
// Dave: 4

const anotherSubscription = () => subscribeToNumbers('Nick');

setTimeout(anotherSubscription, 2500);
// 单独结果：
// Nick: 0
// Nick: 1
// Nick: 2
// Nick: 3
// Nick: 4

// 运行 ts-node observable_share.ts
// 最终结果:
// Dave: 0
// Dave: 1
// Dave: 2
// Nick: 2
// Dave: 3
// Nick: 3
// Dave: 4
// Nick: 4