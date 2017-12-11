import {Inject, Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Rx";

@Injectable()
export class ComparativosService {


  constructor(@Inject(Http) private http: Http) { }

  getAlunos() : Observable<any> {
    return this.http.get('api/alunos/comparativo').map((res: Response) => res.json());
  }

  getOrientadores() : Observable<any> {
    return this.http.get('api/orientadores/comparativo').map((res: Response) => res.json());
  }
}
