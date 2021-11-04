// Deprected: No profile services api call
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Perfil } from '../../../models/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {
  private perfilesUrl = 'api/perfiles';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getPerfiles(): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(this.perfilesUrl)
      .pipe(
        catchError(this.handleError<Perfil[]>('getPerfiles', []))
      );
  }

  getPerfil(id: number): Observable<Perfil> {
    const url = `${this.perfilesUrl}/${id}`;
    return this.http.get<Perfil>(url).pipe(
      catchError(this.handleError<Perfil>(`getPerfil id${id}`))
    );
  }

  updatePerfil(perfil: Perfil): Observable<any> {
    return this.http.put(this.perfilesUrl, perfil, this.httpOptions).pipe(
      catchError(this.handleError<any>('updatePerfil'))
    );
  }

  addPerfil(perfil: Perfil): Observable<Perfil> {
    console.log("added");
    return this.http.post<Perfil>(this.perfilesUrl, perfil, this.httpOptions)
      .pipe(
        tap((newPerfil: Perfil) => console.log(`nuevo perfil w/ id=${newPerfil.id}`)),
        catchError(this.handleError<Perfil>('addPerfil'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log("Error");
      console.error(error);
      return of(result as T);
    };
  }
}
