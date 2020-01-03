import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonNavSetRootPage } from './ion-nav-set-root.page';

const routes: Routes = [
  {
    path: '',
    component: IonNavSetRootPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonNavSetRootPageRoutingModule {}
