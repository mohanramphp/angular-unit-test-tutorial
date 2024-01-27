import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ModelFormComponent } from './modelform.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

export class User {
    constructor(public email: string, public password: string) {
    }
}

describe('Component: Login', () => {

    let component: ModelFormComponent;
    let fixture: ComponentFixture<ModelFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule],
            declarations: [ModelFormComponent]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(ModelFormComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
        component.ngOnInit();
    });

    it('form invalid when empty', () => {
        expect(component.form.valid).toBeFalsy();
    });

    it('email field validity', () => {
        const email = component.form.controls['email'];
        expect(email.valid).toBeFalsy();
    });

    it('email field validity', () => {
        let errors = {};
        const email = component.form.controls['email'];
        errors = email.errors || {};
        expect(errors['required']).toBeTruthy();
    });

    it('submitting a form emits a user', () => {
        expect(component.form.valid).toBeFalsy();
        component.form.controls['email'].setValue("test@test.com");
        component.form.controls['password'].setValue("123456789");
        expect(component.form.valid).toBeTruthy();

        let user: User;
        // Subscribe to the Observable and store the user in a local variable.
        component.loggedIn.subscribe((value) => user = value);

        // Trigger the login function
        component.login();

        // Now we can check to make sure the emitted value is correct
        expect(user.email).toBe("test@test.com");
        expect(user.password).toBe("123456789");
    });


});
