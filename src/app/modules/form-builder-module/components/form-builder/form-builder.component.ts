import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.less'],
})
export class FormBuilderComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {}

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
  }
}
