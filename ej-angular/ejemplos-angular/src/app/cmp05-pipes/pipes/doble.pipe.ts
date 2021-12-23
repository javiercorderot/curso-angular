import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {

  transform(value: number, desc?: number): number {
    if(!desc)
      desc = 0
    return value *  2 - desc   
  }

}
