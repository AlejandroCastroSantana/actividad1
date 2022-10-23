import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Music {
  _id: number;
  name: string;
  duration: string;
}

@Injectable({
  providedIn: 'root'
})

export class MusicService {

  endpoint = 'http://localhost:8080/api/music';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createMusic(music: Music): Observable<any> {
    return this.httpClient.post<Music>(this.endpoint, JSON.stringify(music), this.httpOptions)
      .pipe(
        catchError(this.handleError<Music>('Error occured'))
      );
  }

  getMusic(id): Observable<Music[]> {
    return this.httpClient.get<Music[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Music fetched: ${id}`)),
        catchError(this.handleError<Music[]>(`Get music id=${id}`))
      );
  }

  getMusics() {
    return this.httpClient.get(this.endpoint);
  }

  updateMusic(id, music: Music): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(music), this.httpOptions)
      .pipe(
        tap(_ => console.log(`Music updated: ${id}`)),
        catchError(this.handleError<Music[]>('Update user'))
      );
  }

  deleteMusic(id): Observable<Music[]> {
    return this.httpClient.delete<Music[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Music deleted: ${id}`)),
        catchError(this.handleError<Music[]>('Delete music'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
}