import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheFiltroPage } from './detalhe-filtro';

@NgModule({
  declarations: [
    DetalheFiltroPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheFiltroPage),
  ],
})
export class DetalheFiltroPageModule {}
