import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  fotos: any = [];

  constructor(private s: PlacesService) { }

  ngOnInit() {
    this.s.getFotos().subscribe(f => {
      this.fotos = f;
    })
  }

}
