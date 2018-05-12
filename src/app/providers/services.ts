import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';

export interface InputInterface {
  IMEI: any;
  APPID: any;
  NETWORKNAME?: string;
  DOMAINNAME?: string;
}

@Injectable()
export class Services {

  constructor(public http: HttpClient) {
  }

  get(url: string): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get(url, httpOptions);
  }

  // post(parameters: Object, url: string): Observable<any> {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });

  //   return this.http.post(url, parameters, options)
  //     .map(this.extractData)
  //     .catch(this.handleError);
  // }

  // put(parameters: Object, url: string): Observable<any> {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });

  //   return this.http.put(url, parameters, options)
  //     .map(this.extractData)
  //     .catch(this.handleError);
  // }

  // delete(parameters: Object, url: string): Observable<any> {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });

  //   return this.http.delete(url, options)
  //     .map(this.extractData)
  //     .catch(this.handleError);
  // }

  // private extractData(res: Response) {
  //   let body = res.json();
  //   console.log("Response: " + JSON.stringify(body));
  //   return body || {};
  // }

  // private handleError(error: Response | any) {
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }

}
