import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Item } from '../interfaces/item';
import { searchUser } from '../interfaces/searchUser';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class NombresService {

  private URL_BUSQUEDA: string = 'https://api.github.com/search/users';
  private URL_USER: string = 'https://api.github.com/users';

  constructor(private http: HttpClient) {  }

   getNombres(nameSearch: string): Observable<Item[]>{
    return this.http.get<searchUser>(`${this.URL_BUSQUEDA}?q=${nameSearch}`).pipe(
      map(response => {
        return response.items;
      })
    );
  }

  getUser(userLogin: string): Observable<User>{
    return this.http.get<User>(`${this.URL_USER}/${userLogin}`).pipe(
      map(response => {
        return response;
      })
    );
  }
}
