import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ButterfliesComponent } from '../butterflies/butterflies.component';
import { CarsComponent } from '../cars/cars.component';
import { CellPhonesComponent } from '../cell-phones/cell-phones.component';
import { OfficeComponent } from '../office/office.component';


@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.scss'],
  host: { 'class': 'p-3 ml-0 m-2 w-100 card' }
})
export class MainAreaComponent implements OnInit {

  data: any;
  butterfliesComp: ButterfliesComponent = <any>{};
  carsComp: CarsComponent = <any>{};
  cellPhonesComp: CellPhonesComponent = <any>{};
  officeComp: OfficeComponent = <any>{};

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("/assets/data/data.json").subscribe((data: any) => {
      console.log(data);
      this.data = data;
      this.butterfliesComp.butterflies = data.Butterfly;
      this.butterfliesComp.butterFliesMap.set("initialData", data.Butterfly);
      this.carsComp.cars = data.Cars;
      this.carsComp.carsMap.set("initialData", data.Cars);
      this.cellPhonesComp.cellphones = data.Cellphone;
      this.cellPhonesComp.cellphonesMap.set("initialData", data.Cellphone);
      this.officeComp.offices = data.Office;
      this.officeComp.officesMap.set("initialData", data.Office);
    })
  }

  onRouterActivate($event: any) {
    switch ($event.constructor) {
      case ButterfliesComponent: {
        this.butterfliesComp = $event;
        if (this.data) {
          this.butterfliesComp.butterflies = this.data.Butterfly;
          this.butterfliesComp.butterFliesMap.set("initialData", this.data.Butterfly)
        }
        break;
      }
      case CarsComponent: {
        this.carsComp = $event;
        if (this.data) {
          this.carsComp.cars = this.data.Cars;
          this.carsComp.carsMap.set("initialData", this.data.Cars);
        }
        break;
      }
      case CellPhonesComponent: {
        this.cellPhonesComp = $event;
        if (this.data) {
          this.cellPhonesComp.cellphones = this.data.Cellphone;
          this.cellPhonesComp.cellphonesMap.set("initialData", this.data.Cellphone);
        }
        break;
      }
      case OfficeComponent: {
        this.officeComp = $event;
        if (this.data) {
          this.officeComp.offices = this.data.Office;
          this.officeComp.officesMap.set("initialData", this.data.Office);
        }
        break;
      }
    }
  }

}
