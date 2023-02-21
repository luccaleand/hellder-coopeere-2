import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


const usuarioURL = 'http://localhost:3000/person/';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  create(data: any): Observable<any>{
    return this.httpClient.post(usuarioURL,data)
  }

  findAll() {
    return this.httpClient.get(usuarioURL);
  }

  findOne(data: any): Observable<any>{
    return this.httpClient.get(usuarioURL+'listartodos', data);
  }

  update(data: any){
    return this.httpClient.patch(usuarioURL+'atualizar', data);
  }
  
  delete(data: any){
    return this.httpClient.get(usuarioURL+'apagar');
  }

// autenticação

  login(body: any): Observable<any> {
    return this.httpClient.post(usuarioURL+'login', body);
  }

  //LOGOUT?

}
