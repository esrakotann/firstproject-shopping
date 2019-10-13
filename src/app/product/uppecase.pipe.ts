import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCase'
})
export class UppercasePipe implements PipeTransform { /*bana bi data geliyor ben onu transform yapıyorum*/

  transform(value: string): string {  /*value bize gelen data,filtertext:parametre string tipinde, dönüş tipide product */
      /*filtertext var mı(? soru işareti bu demek) varsa küçük harf yap yoksa veriyi aynı döndür*/
    
    return value.toUpperCase(); 
  }

}
