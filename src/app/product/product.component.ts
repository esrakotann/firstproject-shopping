import { Component, OnInit } from '@angular/core';
//import { Product } from './product';  //bu satırı açınca hata veriyo bende neden acep?
import {AlertifyService} from '../services/alertify.service'; // .. bir üst klasöre git(içinde bulunduğun dosyanın bir üst klasörü)



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService:AlertifyService) { }  //servisi kullanabilmek için constructor'dan injector yapmamız gerekiyor.
  title = "ÜRÜN LİSTESİ";
  filterText="";
   products : Product[] = [
      { id:1, name:"Laptop", price:10500 , categoryId:1, description:"Macbook" , imageUrl:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=926&q=80" },
      { id:2, name: "Earphone", price:250, categoryId:2,  description:"Philips", imageUrl:"https://images.unsplash.com/photo-1481207801830-97f0f9a1337e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" },
      { id:3, name:"Laptop", price:3500 , categoryId:1, description:"Sony Vaio" ,  imageUrl:"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" },
   ]

  ngOnInit() {
  }

  addToCard(product) {
    this.alertifyService.success(product.name + " added")
  }


}
 class Product{
  id:number;  
  name:string;
  price:number;
  categoryId:number;
  description:any;
  imageUrl:string; 
}
