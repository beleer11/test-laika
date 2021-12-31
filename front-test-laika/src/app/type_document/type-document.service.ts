import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Position} from '../position/position';
import {catchError} from 'rxjs/operators';

import {TypeDocument} from './type-document';
@Injectable({
  providedIn: 'root'
})
export class TypeDocumentService {

  private apiURL = 'http://localhost:8000/api/type_document/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-hardik' : 'api-key-laika'
    })
  };

  constructor(private httpClient: HttpClient) { }

  index(): Observable<TypeDocument[]> {
    return this.httpClient.get<any[]>(this.apiURL + 'index', this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  create(person): Observable<TypeDocument> {
    return this.httpClient.post<TypeDocument>(this.apiURL + 'store', JSON.stringify(person), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  findById(id): Observable<TypeDocument> {
    return this.httpClient.get<TypeDocument>(this.apiURL + 'index/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  update(id, person): Observable<TypeDocument> {
    return this.httpClient.put<TypeDocument>(this.apiURL + 'update/' + id, JSON.stringify(person), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  // tslint:disable-next-line:typedef
  delete(id){
    return this.httpClient.delete<TypeDocument>(this.apiURL + 'delete/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  // tslint:disable-next-line:typedef
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
