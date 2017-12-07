import {Inject, Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';


@Injectable()
export class TotalizadoresService {
  constructor(private http: Http) { }

  getTotalizadores(): Observable<any> {
    return this.http.get('api/totalizadores').map((res: Response) => res.json());
  }

}
