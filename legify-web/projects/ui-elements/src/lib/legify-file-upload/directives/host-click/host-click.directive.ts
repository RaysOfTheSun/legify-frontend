import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[legifyWebHostClick]'
})
export class HostClickDirective {
  @Output() legifyWebHostClick: EventEmitter<any> = new EventEmitter();

  @HostListener('click', ['$event'])
  protected handleHostClick(): void {
    console.log('click');
    this.legifyWebHostClick.emit();
  }
}
