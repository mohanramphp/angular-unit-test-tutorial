import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import { UserAsyncComponent } from './user-async.component';
import { UserAsyncService } from './user-async.service';
import { Observable, Observer } from 'rxjs';

describe('User Async Component:', () => {
    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [UserAsyncComponent]
        });
    });

    describe(':', () => {
        function setup() {
            const fixture = TestBed.createComponent(UserAsyncComponent);
            const app = fixture.debugElement.componentInstance;
            const userAsyncService = fixture.debugElement.injector.get(
                UserAsyncService
            );

            return { fixture, app, userAsyncService };
        }

        it('should create the app component', () => {
            const { app } = setup();
            expect(app).toBeTruthy();
        });

        it('should display user name', fakeAsync(() => {
            const { fixture, app, userAsyncService } = setup();
            const mockUser = { name: 'Murthy' };
            spyOn(userAsyncService, 'getUserDetails').and.returnValue(
                Observable.create((observer: Observer<{ name: string }>) => {
                    observer.next(mockUser);
                    return observer;
                })
            );
            tick();
            fixture.detectChanges();
            const userAsyncElement = fixture.debugElement.nativeElement;
            const loggedInUserName = userAsyncElement.querySelector('p');
            expect(loggedInUserName.textContent).toBe(' Murthy ');
        }));

        it('should display a system error', fakeAsync(() => {
            const { app, fixture, userAsyncService } = setup();
            spyOn(userAsyncService, 'getUserDetails').and.returnValue(
                Observable.create((observer: Observer<{ name: string }>) => {
                    return observer.error('something went wrong');
                })
            );

            tick();
            fixture.detectChanges();

            const userAsyncElement = fixture.debugElement.nativeElement;
            const systemError = userAsyncElement.querySelector('p');
            expect(systemError.textContent).toBe('something went wrong');
        }));
    });
});
