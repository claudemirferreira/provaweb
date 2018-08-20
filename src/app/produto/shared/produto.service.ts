import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Produto} from './produto.model';

@Injectable()
export class ProdutoService {
  selectProduto : Produto;

  constructor(private http: Http) { }

  /*
  postProduto(produto: Produto){
    var body = JSON.stringify(produto);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new requestOptions({
                            method: RequestMethod,
                            Headers: headerOptions
                          });
    return this.http.post('http://localhost:59811/',body, requestOptions ).map(x => x.json());

  }
  */

}
