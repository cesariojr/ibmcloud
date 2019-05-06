import { Injectable } from '@angular/core';
import { Room } from './room';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  constructor(private http: HttpClient) { }

  getRooms(parametro: number): Observable<Room> {
    //return of(ROOMS);
    var url: string;
    url = "https://us-south.functions.cloud.ibm.com/api/v1/web/dnovais%40br.ibm.com_dev-Danilo/ibm.cloud.qcon/read-from-cloudant.json?id=" + parametro;
    console.log("url", url);
    return this.http.get<Room>(url)
      .pipe(
        tap(_ => console.log('fetched cloudant'))
      );

  }
}
