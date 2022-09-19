import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButterfliesComponent } from './butterflies/butterflies.component';
import { CarsComponent } from './cars/cars.component';
import { CellPhonesComponent } from './cell-phones/cell-phones.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { OfficeComponent } from './office/office.component';

const routes: Routes = [
    { path: "", component: MainAreaComponent, children: [
        { path: "butterfly", component: ButterfliesComponent },
        { path: "cars", component: CarsComponent },
        { path: "cellphones", component: CellPhonesComponent },
        { path: "office", component: OfficeComponent }
    ] },
    { path: "butterfly", component: ButterfliesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeaturesRoutingModule { }
