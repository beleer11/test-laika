import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Employee } from './employee';
import {Position} from '../position/position';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiURL = 'http://localhost:8000/api/employees/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-hardik' : 'api-key-laika'
    })
  };

  constructor(private httpClient: HttpClient) { }

  index(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiURL + 'index', this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getDataSelect(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiURL + 'getDataSelect', this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  create(employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.apiURL + 'store', JSON.stringify(employee), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  findById(id): Observable<Position> {
    return this.httpClient.get<Position>(this.apiURL + 'index/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  update(id, person): Observable<Employee> {
    return this.httpClient.put<Employee>(this.apiURL + 'update/' + id, JSON.stringify(person), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  // tslint:disable-next-line:typedef
  delete(id){
    return this.httpClient.delete<Employee>(this.apiURL + 'delete/' + id, this.httpOptions)
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
