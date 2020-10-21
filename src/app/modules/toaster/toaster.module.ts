import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent, ToasterComponent } from './components';
import { ToasterService } from './services/toaster.service';

@NgModule({
  declarations: [ToasterComponent, ToastComponent],
  imports: [CommonModule],
  providers: [ToasterService],
  exports: [ToasterComponent],
})
export class ToasterModule {}
