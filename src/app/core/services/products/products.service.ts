import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}api/v1/products?limit=25`)
  }
  getAllProducts():Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}api/v1/products`)
  }
    getspecificyProduct(id:string):Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}api/v1/products/${id}`)
  }
}
