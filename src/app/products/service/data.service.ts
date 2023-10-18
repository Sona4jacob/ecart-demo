import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  search=new BehaviorSubject('')
  constructor(private http:HttpClient) { }

  // api to access all products collection -get is used
  getAllProducts(){
    return this.http.get('http://localhost:3000/products')
  }
  // get single products

  getProduct(id:any){
    return this.http.get('http://localhost:3000/products/'+id) 
    }
// delete
    removeData(id:any){
      return this.http.delete('http://localhost:3000/products/'+id)
    }
// add product
    addProduct(bodyData:any){
      return 	this.http.post("http://localhost:3000/products", bodyData);
    }

    // edit api
    updateProduct(id:any,bodyData:any){
      return this.http.put("http://localhost:3000/products/"+id,bodyData)
    }
}

