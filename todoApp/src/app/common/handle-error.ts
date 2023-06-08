import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HandleError {

    constructor(
    ) { }

     public handleError<T>(operation = 'operation', result?: T) {
         return (error: any): Observable<T> => {
           return of(error.error as T);
         };
     }
}
