import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform(value: string, list: string[]): number {
    let count = 0;
    for (const element of list) {
      console.log('element : ', element);
      if (element === value){
        count += 1;
      }
    }
    console.log('Counter : ', count);
    return count;
  }

}
