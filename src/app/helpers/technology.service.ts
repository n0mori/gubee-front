import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Technology} from "../model/technology";

@Injectable()
export class TechnologyService {

  constructor(private httpClient: HttpClient) {
  }

  public getTechnologies(): Observable<Technology[]> {
    return this.httpClient.get<Technology[]>('/api/technology');
  }

  public getTechnology(id: number): Observable<Technology> {
    return this.httpClient.get<Technology>(`/api/technology/${id}`);
  }
}
