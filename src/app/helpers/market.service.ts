import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Market} from "../model/market";

@Injectable()
export class MarketService {

  constructor(private httpClient: HttpClient) {
  }

  public getMarkets(): Observable<Market[]> {
    return this.httpClient.get<Market[]>('/api/market');
  }

  public getMarket(id: number): Observable<Market> {
    return this.httpClient.get<Market>(`/api/market/${id}`);
  }
}
