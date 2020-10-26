import { ToasterService } from '@app/modules/toaster/services';
import { Toast } from '@app/modules/toaster/types';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.less'],
})
export class ToasterComponent implements OnInit {
  public toastsSubject = new BehaviorSubject<Toast[]>([]);
  public toasts: Toast[] = [];
  constructor(private toasterService: ToasterService) {}

  ngOnInit(): void {
    this.toasterService.toast$.subscribe((toast) => {
      this.toasts = [toast, ...this.toasts];
      console.log(this.toasts);
    });
  }

  remove(index: number) {
    this.toasts = this.toasts.filter((_, i) => i !== index);
  }
}
