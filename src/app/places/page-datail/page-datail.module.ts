import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageDatailPageRoutingModule } from './page-datail-routing.module';

import { PageDatailPage } from './page-datail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageDatailPageRoutingModule
  ],
  declarations: [PageDatailPage]
})
export class PageDatailPageModule {}
