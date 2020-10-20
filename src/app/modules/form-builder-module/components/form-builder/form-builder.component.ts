import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ObservablePlaygroundService } from '../../services/observable-playground.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.less'],
})
export class FormBuilderComponent implements OnInit {
  profileForm: FormGroup;
  clickInterval: number;

  constructor(
    private fb: FormBuilder,
    private observablePlaygroundService: ObservablePlaygroundService
  ) {}

  updateProfile() {
    console.log('kura');
    this.profileForm.patchValue({
      firstName: 'Nancy',
    });
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: [null],
      lastName: [''],
      address: this.fb.group({
        street: [Validators.minLength(3)],
        city: [''],
        state: [''],
        zip: [''],
      }),
    });

    this.observablePlaygroundService.clickInterval$.subscribe(
      (val) => (this.clickInterval = val)
    );
  }
}
