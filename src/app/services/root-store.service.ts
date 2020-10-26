import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RootStoreService {
  private readonly _loading = new BehaviorSubject<boolean>(false);
  readonly loading$ = this._loading.asObservable();

  private get loading(): boolean {
    return this._loading.getValue();
  }

  private set loading(value: boolean) {
    this._loading.next(value);
  }
  setLoading(value: boolean) {
    this.loading = value;
  }
}
