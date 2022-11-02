import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  readonly baseUrl: string = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) {
  }

  helloWorld(): Observable<String> {
    return this.http.get<String>(`${this.baseUrl}`);
  }
}
