import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

  transform(list: any[], field: string, keyword: string): any {
    if (!field || !keyword) {
      return list;
    }
    return list.filter(item => {
      // console.log(item);
      // console.log(item.desc);
      const itemFieldValue: string = item[field].toLowerCase();
      return itemFieldValue.indexOf(keyword) >= 0;
    });
  }

}
