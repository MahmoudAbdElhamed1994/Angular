import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any[] {
    var x:any[]=[];
    args.forEach(element => {
      if(element===value)
      x.push(element);
    });
    return x;
  }

}
