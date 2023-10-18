import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  addForm=this.fb.group({
    id:['',[Validators.required,Validators.pattern('[0-9]+')]],
    productName:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
    catagoryId:['',[Validators.required,Validators.pattern('[0-9]+')]],
    discription:['',[Validators.required,Validators.pattern('[a-zA-Z .,]+')]],
    price:['',[Validators.required,Validators.pattern('[0-9]+')]],
    img:['',[Validators.required,Validators.pattern('[0-9a-zA-Z:/._-]+')]],
    fprice:['',[Validators.required,Validators.pattern('[0-9]+')]],
    rating:['',[Validators.required,Validators.pattern('[0-9.]+')]],
    review:['',[Validators.required,Validators.pattern('[0-9]+')]],

  })

  constructor(private fb:FormBuilder,private ds:DataService,private rout:Router){}
  addNewProduct(){
    const path=this.addForm.value
    let productData={
      id :path.id ,
      productName:path.productName,
      catagoryId:path.catagoryId,
      discription:path.discription,
      price:path.price,
      img:path.img,
      fprice:path.fprice,
      rating:path.rating,
      review:path.review
    }
     if(this.addForm.valid){
    this.ds.addProduct(productData).subscribe({
      next:(result:any)=>{
        alert("product added successfully")
        this.rout.navigateByUrl("")
      }
    })
  }
  else{
    alert("plese fil the form....")
  }
  }
}
