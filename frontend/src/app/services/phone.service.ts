import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Phone } from '../models/phone';

@Injectable({
  providedIn: 'root',
})
export class PhoneService {
  private apiUrl = 'http://localhost:5013/api/phone';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Phone[]> {
    return this.http.get<Phone[]>(this.apiUrl);
  }

  get(id: number): Observable<Phone> {
    return this.http.get<Phone>(`${this.apiUrl}/${id}`);
  }

  create(p: Phone): Observable<Phone> {
    return this.http.post<Phone>(this.apiUrl, p);
  }

  update(p: Phone): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${p.id}`, p);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
