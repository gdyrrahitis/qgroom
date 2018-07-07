import { Directive, ElementRef, AfterViewChecked } from '@angular/core';
import { Label } from "ui/label";

@Directive({ selector: 'Label' })
export class LabelCenterDirective implements AfterViewChecked {
    private get nativeView(): Label {
        return this.element.nativeElement;
    }

    constructor(private readonly element: ElementRef) { }

    ngAfterViewChecked(): void {
        if (this.nativeView.android && (this.nativeView.android.getGravity() & 0x00000020)) {
            this.nativeView.android.setGravity(this.nativeView.android.getGravity() & 0xffffffdf);
        }
    }
}