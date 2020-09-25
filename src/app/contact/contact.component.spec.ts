import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { ContactComponent } from './contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ContactComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
      });
  }));

  it('should have a text contact page', async(() => {
    expect(component.text).toEqual('contact page');
  }));
  it('Should set submitted to true', async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));
  it('should call the onSubmit method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));
  it('form should be invalid', async(() => {
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['text'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  }));
  it('form should be valid', async(() => {
    component.contactForm.controls['email'].setValue('bang@wp.pl');
    component.contactForm.controls['name'].setValue('barbara');
    component.contactForm.controls['text'].setValue('tezt');
    expect(component.contactForm.valid).toBeTruthy();
  }));
});
