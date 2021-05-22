import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {Market} from "../model/market";
import {Technology} from "../model/technology";

@Injectable()
export class ProductService {
  constructor(private httpClient: HttpClient) {
  }

  public getProducts(markets?: Market[], stack?: Technology[]): Observable<Product[]> {
    let params: HttpParams = new HttpParams();
    if (stack) {
      params = params.append('stack', stack.map(t => t.name).join(','))
    }
    if (markets) {
      params = params.append('markets', markets.map(m => m.name).join(','))
    }

    return this.httpClient.get<Product[]>('/api/product', {params});
  }

  public getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`/api/product/${id}`)
  }
}
