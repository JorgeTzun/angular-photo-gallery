import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { PhotoService } from 'src/app/services/photo.service';
import { IPhoto } from 'src/app/interfaces/Photo';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {

  id: string
  photo: IPhoto
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private srvPhoto: PhotoService
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
      this.srvPhoto.getPhoto(this.id)
        .subscribe(
          (res) => this.photo = res,
          (err) => console.log(err)
        );
    });
  }

  deletePhoto(id: string) {
    this.srvPhoto.deletePhoto(this.id)
      .subscribe(
        (res) => this.router.navigate(['/']),
        (err) => console.log(err)
      );
  }

  updatePhoto(title: HTMLInputElement, description: HTMLTextAreaElement): boolean {

    //console.log(title.value, description.value);
    this.srvPhoto.updatePhoto(this.id, title.value, description.value).subscribe(
      (res) => this.router.navigate(['/']),
      (err) => console.log(err));
    return false;
  }

}
