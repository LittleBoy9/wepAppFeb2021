import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import {ButtonModule} from 'primeng-lts/button';
import {AccordionModule} from 'primeng-lts/accordion';


import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
  MatExpansionModule,
  ButtonModule,
  AccordionModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
