import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caption'
})
export class CaptionPipe implements PipeTransform {
  transform(value: string, ...args: string[]): unknown {
    const valueToTransform = args && args.length > 0 ? `${value}_${args.join('_')}` : value;
    return `${valueToTransform}_CAPTION`;
  }
}
