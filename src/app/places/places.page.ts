import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  Places: any = [];

  constructor(private placesService: PlacesService,
  private ruta: Router) { }

  ngOnInit() {
    this.Places = this.placesService.getPlaces();
  }
  
  ionViewCanEnter(){
    this.Places = this.placesService.getPlaces();
  }

  goHome() {
    this.ruta.navigate(['/home']);
  }
  addNewPlace() {
    this.ruta.navigate(['/new-place'])
  }

}
