import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { IPhoto } from '../interfaces/Photo'

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  URI:string =  `${environment.API}photos`


  constructor(private _http: HttpClient) { }

  createPhoto(title: string, description: string, photo: File) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', photo);

    return this._http.post(`${this.URI}`, fd)

  }

  getPhotos() {
    return this._http.get<IPhoto[]>(`${this.URI}`);
  }

  getPhoto(id: string) {
    return this._http.get<IPhoto>(`${this.URI}/` + id);
  }

  deletePhoto(id: string) {
    return this._http.delete(`${this.URI}/` + id);
  }

  updatePhoto(id: string, title: string, description: string){
    return this._http.put(`${this.URI}/` + id, {title, description})
  }
}
