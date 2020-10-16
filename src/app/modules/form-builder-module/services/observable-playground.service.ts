import { EventEmitter, Injectable } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ObservablePlaygroundService {
  // public clickInterval: Observable;
  constructor() {}
  clickInterval$ = fromEvent(document, 'click').pipe(
    switchMap(() => interval(200))
  );
}
