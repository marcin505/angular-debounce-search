import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private infoSource = new BehaviorSubject<string>('default info');
  currentInfo = this.infoSource.asObservable();
  constructor() {}
  changeInfo(info: string) {
    this.infoSource.next(info);
  }
}
