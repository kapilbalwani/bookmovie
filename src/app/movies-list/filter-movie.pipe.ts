import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMovie'
})
export class FilterMoviePipe implements PipeTransform {

  transform(value: any, filterString: String): any {
    
    if (value.length===0){
      return value;
    }
    const resultArray=[];
    for(const item of value){
      
      if (item.name.toLowerCase().includes(filterString.toLowerCase()) || item.language.toLowerCase().includes(filterString.toLowerCase())){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
