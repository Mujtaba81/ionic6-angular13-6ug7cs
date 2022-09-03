import { Profile } from './profile.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  apiUrl = 'https://foodmangalo.herokuapp.com/api';

  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${this.apiUrl}/profile/1`);
    //return this.http.get<Product[]>(`${this.apiUrl}/products`);
    //return null;
  }
}
