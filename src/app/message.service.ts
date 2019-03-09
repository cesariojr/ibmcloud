import { Injectable } from '@angular/core';
import { ROOMS } from './mock-rooms';
import { Room } from './room';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  constructor(private http: HttpClient) { }

  getRooms(): Observable<Room[]> {
    //return of(ROOMS);
    return this.http.get<Room[]>("https://us-south.functions.cloud.ibm.com/api/v1/web/dnovais%40br.ibm.com_dev-Danilo/ibm.cloud.rpg/serverless-rpg-test.json")
      .pipe(
        tap(_ => console.log('fetched heroes'))
      );

  }
}
