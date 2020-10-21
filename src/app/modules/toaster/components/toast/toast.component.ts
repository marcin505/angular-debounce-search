import { Toast } from '../../types';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-toast',
  template: `<ng-container>
    <div class="toast toast-{{ toast.type }}" [style.top.px]="id * 108">
      <h4 class="toast-heading">{{ toast.title }}</h4>
      <p>{{ toast.body }}</p>
      <a class="close" (click)="remove.emit(id)">&times;</a>
    </div>
  </ng-container> `,
  styleUrls: ['./toast.component.less'],
})
export class ToastComponent implements AfterViewInit {
  @Input() toast: Toast;
  @Input() id: number;
  @Output() remove = new EventEmitter<number>();

  ngAfterViewInit() {
    timer(5000).subscribe(() => {
      this.remove.emit(this.id);
    });
  }
}
