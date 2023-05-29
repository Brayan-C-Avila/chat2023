import { Component, OnInit, ViewChild } from '@angular/core';
import { PlacesService } from './../../places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  @ViewChild('titulo') ti: any;
  @ViewChild('ruta') ru: any;

  constructor(private s: PlacesService,
  private r: Router) { }

  ngOnInit() {
  }

  saveNewPlace() {
    this.s.adPlace(this.ti.value, this.ru.value);
    this.r.navigate(['/places']);
  }

}
