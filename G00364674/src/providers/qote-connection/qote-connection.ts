import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the QoteConnectionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QoteConnectionProvider {

  constructor(public http: HttpClient) {
    console.log('Hello QoteConnectionProvider Provider');
  }
  getQote():Observable<any>{
    return this.http.get("http://quotes.rest/qod.json")
  }
}
