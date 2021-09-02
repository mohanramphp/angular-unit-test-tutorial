import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Subject } from "rxjs";
import { AsyncStreamComponent } from "./async.stream.component";

describe('Async component with RX', () => {
    let component: AsyncStreamComponent;
    let fixture: ComponentFixture<AsyncStreamComponent>;

    beforeEach(async() => {
        await TestBed.configureTestingModule({
            declarations:[AsyncStreamComponent]
        }).compileComponents();
       
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AsyncStreamComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('should correctly visualize the emitted value from the stream', () => {
        const stream = new Subject<string>();
        const divElement: HTMLDivElement = fixture.debugElement.query(By.css('div')).nativeElement;

        component.personName = stream.asObservable();
        fixture.detectChanges();
        
        expect(divElement.innerHTML).toBe('');
        stream.next('Murthy');
        fixture.detectChanges();
        expect(divElement.innerHTML).toBe('Murthy');

    });
}); //end of suite