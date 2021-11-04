import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {map, retry, catchError, tap} from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import {Inventario, MaxPriceInv, MaxProdInv} from '../../../models/inventario';
import {Producto} from '../../../models/producto';

@Injectable({
  providedIn: 'root'
})
export class InventariosService {
  private endpoint = 'http://localhost:4000/api';

  inventarios: Inventario[] = [];

  currentInventario: Inventario = {
    _id: 'none',
    name: 'none',
    descripcion: 'none',
    creationDate: new Date(),
    lang: 'none',
    uID: 'none'
  };

  constructor(private http: HttpClient) {}

  accederInventario(inventario: Inventario) {
    this.currentInventario = inventario;
  }

  private extraData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unkown error!';
    if (error.error instanceof ErrorEvent) {
      // Client side errors
    } else { 
      // Server side errors
      errorMessage = `Codigo de error ${error.status}, por favor contacte al admin."`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  
  getMaxPriceInventarios(): Observable<MaxPriceInv[]> {
    return this.http.get<MaxPriceInv[]>(this.endpoint + '/maxPrice').pipe(retry(3), catchError(this.handleError));
  }

  getInventarios(lang: string): Observable<Inventario[]> {
    return this.http.get<Inventario[]>(this.endpoint + '/rInven?lang=' + lang).pipe(retry(3), catchError(this.handleError));
  }

  getProductos(id: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.endpoint + '/rProd?invenID=' + id).pipe(retry(3), catchError(this.handleError));
  }

  addInventario(inventario: Inventario): Observable<Inventario> {
    return this.http.post<Inventario>(this.endpoint + '/cInven', inventario).pipe(retry(3), catchError(this.handleError));
  }

  addProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.endpoint + '/cProd', producto).pipe(retry(3), catchError(this.handleError));
  }

  getMaxProd(): Observable<MaxProdInv[]> {
    return this.http.get<MaxProdInv[]>(this.endpoint + '/maxProd').pipe(retry(3), catchError(this.handleError));
  }
  
  deleteInventario(inventario: Inventario): Observable<Inventario> {
    return this.http.delete<Inventario>(this.endpoint + '/dInven?invenID=' + inventario._id).pipe(retry(3), catchError(this.handleError));
  }

  deleteProducto(idprod: string): Observable<Producto> {
    return this.http.delete<Producto>(this.endpoint + '/dProd?invenID=' + idprod).pipe(retry(3), catchError(this.handleError));
  }
}

/*
  currentInventario: Inventario = {
    id: 0,
    productos: []
  };

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  modificarInventario(inventario: Inventario) {
    this.currentInventario = inventario;
  }

  getInventarios(): Observable<Inventario[]> {
    return this.http.get<Inventario[]>(this.inventariosUrl)
      .pipe(
        catchError(this.handleError<Inventario[]>('getInventarios', []))
      );
  }

  getInventario(id: number): Observable<Inventario> {
    const url = `${this.inventariosUrl}/${id}`;
    return this.http.get<Inventario>(url).pipe(
      catchError(this.handleError<Inventario>(`getInventario id${id}`))
    );
  }

  updateInventario(inventario: Inventario): Observable<any> {
    return this.http.put(this.inventariosUrl, inventario, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateInventario'))
    );
  }

  addInventario(inventario: Inventario): Observable<Inventario> {
    console.log("added");
    return this.http.post<Inventario>(this.inventariosUrl, inventario, this.httpOptions)
      .pipe(
        tap((newInventario: Inventario) => console.log(`nuevo inventario w/ id=${newInventario.id}`)),
        catchError(this.handleError<Inventario>('addInventario'))
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
*/
