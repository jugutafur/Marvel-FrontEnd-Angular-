import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { usuarios } from '../models/galeria.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCharacters (){
    return this.http.get<any>(environment.Url_apiMarvel);
  }

  getXUser(id: string){
    return this.http.get<usuarios[]>(environment.Url_apiBD+ "/" + id);
  }

  createUser(user: usuarios){
    return this.http.post(environment.Url_apiBD+ "save",user);
  }

  updateUser(id: string, changes: Partial<usuarios>){
    return this.http.put<usuarios[]>(environment.Url_apiBD + id, changes);
  }

  loginAcount(){
    return this.http.get<usuarios[]>(environment.Url_apiBD+ "/todos");
  }

}
