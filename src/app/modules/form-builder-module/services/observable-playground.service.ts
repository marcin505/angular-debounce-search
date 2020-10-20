import { EventEmitter, Injectable } from '@angular/core';
import { fromEvent, interval, Observable, timer } from 'rxjs';
import { mapTo, startWith, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ObservablePlaygroundService {
  // public clickInterval: Observable;
  constructor() {}
  clickInterval$ = interval(1000).pipe(startWith(0));
}
