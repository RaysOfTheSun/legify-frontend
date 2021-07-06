import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translatableText'
})
export class TranslatableTextPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return `${value}_CAPTION`;
  }
}
