import { DebugElement } from "@angular/core";
import { async, ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AsyncAuthComponent } from "./async-auth.component";
import { AsyncAuthService } from "./async-auth.service";

describe('component Auth:', () => {
    let component: AsyncAuthComponent;
    let fixture: ComponentFixture<AsyncAuthComponent>;
    let authService: AsyncAuthService;
    let el: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AsyncAuthComponent],
            providers: [AsyncAuthService]
        }).compileComponents();
        // create component and fixture
        fixture = TestBed.createComponent(AsyncAuthComponent);
        // create component and fixture
        el = fixture.debugElement.query(By.css('a'));

        // get test component from the fixture
        component = fixture.componentInstance;

        // get the auth service 
        authService = TestBed.inject(AsyncAuthService);

    });

    it('Button label via jasmine.done', (done) => {
        fixture.detectChanges(); // ngOnInit triggered automatically
        const aElement: HTMLAnchorElement = el.nativeElement;
        expect(aElement.textContent.trim()).toBe('Login');
        const spy = spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
        component.ngOnInit();
        spy.calls.mostRecent().returnValue;

        spy.calls.mostRecent().returnValue.then(() => {
            fixture.detectChanges();
            expect(aElement.textContent.trim()).toBe('Logout');
            done();
        });
    });

    /*it('Button label via jasmine.done with async - my own', async (done) => {
        fixture.detectChanges(); // ngOnInit triggered automatically
        const aElement: HTMLAnchorElement = el.nativeElement;
        expect(aElement.textContent.trim()).toBe('Login');
        let spy = spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
        component.ngOnInit();
        await spy.calls.mostRecent().returnValue;

        fixture.detectChanges();
        expect(aElement.textContent.trim()).toBe('Logout');
        done();
    });*/

    it('Button label via async', async(() => {
        spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
        fixture.detectChanges(); // ngOnInit triggered automatically
        const aElement: HTMLAnchorElement = el.nativeElement;
        expect(aElement.textContent.trim()).toBe('Login');

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(aElement.textContent.trim()).toBe('Logout');
        });

    }));

    it('Button label via fakeAsync', fakeAsync(() => {

        const aElement: HTMLAnchorElement = el.nativeElement;

        spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
        expect(aElement.textContent.trim()).toBe('');
        fixture.detectChanges(); // ngOnInit triggered automatically
        expect(aElement.textContent.trim()).toBe('Login');
        tick();

        fixture.detectChanges();
        expect(aElement.textContent.trim()).toBe('Logout');


    }));



});