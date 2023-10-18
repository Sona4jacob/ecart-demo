import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent {
  allProducts:any=[]
  catagoryProducts:any=[]
  searchString:any=""
  
 constructor(private ds:DataService){}
 ngOnInit(){
  this.ds.getAllProducts().subscribe({
    next :(result:any)=>{
      this.allProducts= result
      console.log(this.allProducts);
      this.catagoryProducts=this.allProducts

    }
  })
  this.searchString=this.ds.search.subscribe((data:any)=>{
    this.searchString=data
    console.log(this.searchString);
    
  })
 }

 catagoryProduct(catId:any){
  this.catagoryProducts=this.allProducts.filter((item:any)=>
    item["catagoryId"]==catId || catId==""
  )
  console.log(this.catagoryProducts);
  
 }
}
