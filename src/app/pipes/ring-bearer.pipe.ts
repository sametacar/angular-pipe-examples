import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ringBearer',
  standalone: true,
})
export class RingBearerPipe implements PipeTransform {
  transform(value: boolean): string {
    console.log('ringBearerPipe');
    return value ? '💍 Ring Bearer' : '🚫 Not a Ring Bearer';
  }
}
