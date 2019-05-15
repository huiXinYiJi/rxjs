import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

function getFromGoogle(): Observable<any> {
  return Observable.create(function subscribe(observer) {
    observer.next('http://google.com');
    observer.error({
      message: 'Google can\'t be reached.',
      status: 404
    });
    observer.complete();
  })
}

function getFromBing(): Observable<any> {
  return Observable.create(function subscribe(observer) {
    observer.next('http://global.bing.com');
    observer.complete();
  })
}

function getFromBaidu(): Observable<any> {
  return Observable.create(function subscribe(observer) {
    observer.next('http://www.baidu.com');
    observer.complete();
  })
}

getFromGoogle().catch(err => {
  console.error(`Error: ${err.status}: ${err.message}`);
  if (err.status === 404) {
    return getFromBaidu();
  } else {
    return getFromBing();
  }
}).map(x => `The site is: ${x}`)
.subscribe(
  x => console.log(`Subscriber got: ` +x),
  err => console.error(err),
  () => console.log(`The streaming is over.`)
)

// 运行 ts-node observable_catch.ts
// 结果：
// Subscriber got: The site is: http://google.com
// Error: 404: Google can't be reached.
// Subscriber got: The site is: http://www.baidu.com
// The streaming is over.
