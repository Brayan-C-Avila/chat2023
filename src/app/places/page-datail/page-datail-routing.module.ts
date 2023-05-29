import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageDatailPage } from './page-datail.page';

const routes: Routes = [
  {
    path: '',
    component: PageDatailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageDatailPageRoutingModule {}
