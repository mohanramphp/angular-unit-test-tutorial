// pipe, directive, service
// pipe - contains transformation logic you can use in html
// built-in ngClass, ngStyle, ng-if, ng-for, [hidden]
// custom directives

import { Component, HostListener } from "@angular/core";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { CapitalizeDirective } from "./capitalize.directive";

@Component({
    template: `<p [Capitalize]>
        testing directives are awesome!
    </p>`,
})
class TestComponent {
    clickCount = 0;

    @HostListener('click')
    onClick() {
        this.clickCount = ++this.clickCount;
    }
}

describe('Capitalize Directive', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TestComponent, CapitalizeDirective]
        }).compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
    }); // beforeEach completed

    it('should create component instance', () => {
        expect(component).toBeDefined();
    });

    it('should capitalize text when initially clicked', () => {
        const nativeElement: HTMLElement = fixture.debugElement.nativeElement; //Real DOME Element
        const p: HTMLParagraphElement = nativeElement.querySelector('p');
        // change clickCount to 1 and capitalize text
        p.click();
        fixture.detectChanges();
        expect(component.clickCount).toBe(1);
        expect(p.style.textTransform).toBe('uppercase');
    });

    it('should lowercase text when clicked twice', () => {
        const nativeElement: HTMLElement = fixture.debugElement.nativeElement; //Real DOME Element
        const p: HTMLParagraphElement = nativeElement.querySelector('p');
        // change clickCount to 1 and capitalize text
        p.click();
        fixture.detectChanges();
        // set clickcount to 2 and set to lowercase text
        p.click();
        fixture.detectChanges();
        expect(component.clickCount).toBe(2);
        expect(p.style.textTransform).toBe('lowercase');
    });
})

