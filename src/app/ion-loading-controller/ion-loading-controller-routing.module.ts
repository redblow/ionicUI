import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonLoadingControllerPage } from './ion-loading-controller.page';

const routes: Routes = [
  {
    path: '',
    component: IonLoadingControllerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonLoadingControllerPageRoutingModule {}
