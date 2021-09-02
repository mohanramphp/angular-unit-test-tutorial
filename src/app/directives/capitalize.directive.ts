import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[Capitalize]'
})
export class CapitalizeDirective {
    constructor(private el: ElementRef) {

    }

    @HostListener('click')
    onClick() {
        this.toggleTextCasing();
    }

    private toggleTextCasing() {
        const textTransform = this.el.nativeElement.style.textTransform;
        this.el.nativeElement.style.textTransform = (textTransform === 'uppercase') ? 'lowercase' : 'uppercase';
    }

}

// <div click="onClick()" [Capitalize]>Welcome to Bank of America</div>