import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  url = 'https://ng-artists.herokuapp.com/api/artists/';
  urlArtist = `https://theaudiodb.com/api/v1/json/1/search.php?s=`;
  constructor(private http: HttpClient) { }
  // The execution/subscription of fetch methods must be whithin used component
  getArtists(): Observable<any> {
    return this.http.get(this.url)
  }
  deleteArtist(id: string) {
    return this.http.delete(this.url + id);
  }
  createArtist(artist: Character): Observable<any> {
    return this.http.post(this.url, artist);
  }
  // This method allows to get data for edit a single artist
  getArtist(id: string): Observable<any> {
    return this.http.get(this.url + id)
  }
  // This method allows to handle update data
  updateArtist(id: string, artist: Character): Observable<any> {
    return this.http.put(this.url + id, artist)
  }
  getArtistPicture(artistName: string): Observable<any> {
    return this.http.get(this.urlArtist + artistName)
  }
}

