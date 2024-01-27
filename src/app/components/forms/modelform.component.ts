
/*
    When the user submits the form we call the login() function.
    We associate this template form element with the model form on our component.
    We link specific template form controls to FormControls on our form model.
    We initialise our form model in the ngOnInit lifecycle hook.
The rest of the LoginComponent looks the same as before.
Our test suite looks mostly the same but has a few key differences:
*/

import { Component, EventEmitter, Output } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";


export class User {
    constructor(public email: string, public password: string) {
    }
}
@Component({
    selector: 'app-login',
    template: `
  <form (ngSubmit)="login()" 
        [formGroup]="form"> 
    <label>Email</label>
    <input type="email"
           formControlName="email"> 
    <label>Password</label>
    <input type="password"
           formControlName="password"> 
    <button type="submit">Login</button>
  </form>
  `
})
export class ModelFormComponent {
    @Output() loggedIn = new EventEmitter<User>();
    form: UntypedFormGroup;

    constructor(private fb: UntypedFormBuilder) {
    }

    ngOnInit() {
        (4)
        this.form = this.fb.group({
            email: ['', [
                Validators.required,
                Validators.pattern("[^ @]*@[^ @]*")]],
            password: ['', [
                Validators.required,
                Validators.minLength(8)]],
        });
    }

    login() {
        console.log(`Login ${this.form.value}`);
        if (this.form.valid) {
            this.loggedIn.emit(
                new User(
                    this.form.value.email,
                    this.form.value.password
                )
            );
        }
    }
}


