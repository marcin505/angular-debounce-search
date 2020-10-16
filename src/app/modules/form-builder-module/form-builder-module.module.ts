import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ObservablePlaygroundService } from './services/observable-playground.service';

@NgModule({
  declarations: [FormBuilderComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormBuilderComponent],
  providers: [ObservablePlaygroundService],
})
export class FormBuilderModuleModule {}
