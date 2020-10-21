import { notifications, Toast } from '../types';
import { BehaviorSubject, interval, Subject, timer, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  private subject = new Subject<Toast>();
  public toast$: Observable<Toast>;
  constructor() {
    this.toast$ = this.subject.asObservable();
  }

  show(type = notifications.SUCCESS, title: string, body: string): void {
    this.subject.next({ type, title, body });
  }
}
