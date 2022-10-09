import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  endpoint = 'http://localhost:8080/api/music';

  constructor(private httpClient: HttpClient) { }

  getMusic() {
    return this.httpClient.get(this.endpoint);
  }
}
