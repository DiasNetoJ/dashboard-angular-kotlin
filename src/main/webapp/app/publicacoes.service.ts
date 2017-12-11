import {Inject, Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class PublicacoesService {

  constructor(@Inject(Http) private http: Http) { }


  getPublicacoesAlunos(): Observable<any> {
    return this.http.get('api/alunos/publicacoes').map((res: Response) => res.json());
  }

  getPublicacoesOrientadores(): Observable<any> {
    return this.http.get('api/orientadores/publicacoes').map((res: Response) => res.json());
  }
}
