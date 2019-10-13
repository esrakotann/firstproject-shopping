import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform { /*bana bi data geliyor ben onu transform yapıyorum*/

  transform(values: Product[], filterText?: string, fields?: Array<any>): Product[] {  /*value bize gelen data,
    filtertext:parametre string tipinde, dönüş tipide product */
    
    filterText = filterText ? filterText.toLocaleLowerCase() : null  /*filtertext var mı(? soru işareti bu demek) varsa 
    küçük harf yap yoksa veriyi aynı döndür*/

      return filterText?values.filter((p:Product)=> p["name"].toLocaleLowerCase().indexOf(filterText)!==-1):values; 

      /*filtertext var mı? varsa value'ya(listeye göre) göre filtrele yoksa value dönsün.valueya göre filtrele>>
       her bir p için(ürün için) p'nin ismini küçük harfe çevir
       ve içerisinde arama ifadesi var mı(filtertext var mı) diye bak varsa listeye ekle yani yeni bir liste oluştur*/


   // return filterText ? values.filter((p: Product) => !(fields.every(i => {  
  //  return p[i].toLocaleLowerCase().indexOf(filterText);
  //  }))) : values;  */
  }

}
