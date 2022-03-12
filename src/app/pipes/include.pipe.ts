import { Pipe, PipeTransform } from '@angular/core';
import { ExceptionsHandler } from 'src/environments/exceptionsHandler';

@Pipe({
  name: 'include'
})
export class IncludePipe implements PipeTransform {

  transform(value: any, list: any[]): boolean {
    if (list === undefined) { throw new ExceptionsHandler('Erreur dans include pipe !').warn(); }
    return list.includes(value);
  }


}
