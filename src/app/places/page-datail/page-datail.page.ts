import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-page-datail',
  templateUrl: './page-datail.page.html',
  styleUrls: ['./page-datail.page.scss'],
})
export class PageDatailPage implements OnInit {

  place: any = [];

  constructor(private s: PlacesService,
    private r: ActivatedRoute,
    private router: Router,
    private alert: AlertController) { }

  ngOnInit() {
    this.r.paramMap.subscribe(par => {
      const id = par.get('placeId');
      if (id !== null) {
        this.place = this.s.getPlace(id);
      }
    })
  }
 async deletePlace() {
    const alertElement = await this.alert.create({
      header: 'Estas seguro de eliminar este registro',
      message: 'Confirmar',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.s.deletePlace(this.place.id);
            this.router.navigate([('/places')]);
          },
        },
      ],
    });
    await alertElement.present();
  }
}



