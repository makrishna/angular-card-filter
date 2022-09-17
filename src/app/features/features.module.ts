import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainAreaComponent } from './main-area/main-area.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { ButterfliesComponent } from './butterflies/butterflies.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { CarsComponent } from './cars/cars.component';
import { CellPhonesComponent } from './cell-phones/cell-phones.component';
import { OfficeComponent } from './office/office.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ImageCardComponent,
    ButterfliesComponent,
    MainAreaComponent,
    CarsComponent,
    CellPhonesComponent,
    OfficeComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    HttpClientModule
  ]
})
export class FeaturesModule { }
