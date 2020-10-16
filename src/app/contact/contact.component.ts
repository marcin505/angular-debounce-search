import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ObservablePlaygroundService } from '../modules/form-builder-module/services/observable-playground.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less'],
})
export class ContactComponent implements OnInit {
  clickInterval: number;
  text = 'contact page';
  contactForm: FormGroup;
  contact = {
    name: '',
    email: '',
    text: '',
  };
  submitted = false;

  constructor(public observablePlaygroundService: ObservablePlaygroundService) {
    this.createForm();
  }

  createForm(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(this.contact.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl(this.contact.email, [
        Validators.required,
        Validators.email,
      ]),
      text: new FormControl(this.contact.text, Validators.required),
    });
  }

  ngOnInit(): void {
    this.observablePlaygroundService.clickInterval$.subscribe(
      (val) => (this.clickInterval = val)
    );
  }

  onSubmit(): void {
    this.submitted = true;
  }
}
