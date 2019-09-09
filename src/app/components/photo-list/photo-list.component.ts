import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos = [];
  constructor(private srvPhotos: PhotoService, private router: Router) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {

    this.srvPhotos.getPhotos()
      .subscribe(
        (res) => this.photos = res,
        (err) => console.log(err));

  }

  selectedPhoto(id: string) {
    this.router.navigate(['/photos', id]);
  }

}
