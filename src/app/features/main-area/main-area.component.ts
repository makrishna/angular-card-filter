import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ButterfliesComponent } from '../butterflies/butterflies.component';
import { CarsComponent } from '../cars/cars.component';
import { CellPhonesComponent } from '../cell-phones/cell-phones.component';
import { OfficeComponent } from '../office/office.component';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.scss'],
  host: { 'class': 'p-3 ml-0 m-2 w-100 card' }
})
export class MainAreaComponent implements OnInit {

  data: any;
  wholeData:any = [];
  wholeDataMap = new Map();
  butterfliesComp: ButterfliesComponent = <any>{};
  carsComp: CarsComponent = <any>{};
  cellPhonesComp: CellPhonesComponent = <any>{};
  officeComp: OfficeComponent = <any>{};

  routerActivated = true;

  constructor(private httpClient: HttpClient, private appService:AppService, private router:Router) { }

  ngOnInit(): void {
    this.httpClient.get("/assets/data/data.json").subscribe((data: any) => {
      console.log(data);
      this.data = data;
      this.wholeData = [...data.Butterfly,...data.Cars,...data.Cellphone,...data.Office];
      this.wholeDataMap.set("initialData", this.wholeData);
      this.butterfliesComp.butterflies = data.Butterfly;
      this.butterfliesComp.butterFliesMap.set("initialData", data.Butterfly);
      this.carsComp.cars = data.Cars;
      this.carsComp.carsMap.set("initialData", data.Cars);
      this.cellPhonesComp.cellphones = data.Cellphone;
      this.cellPhonesComp.cellphonesMap.set("initialData", data.Cellphone);
      this.officeComp.offices = data.Office;
      this.officeComp.officesMap.set("initialData", data.Office);
    })
    this.appService.$searchQueryChange.subscribe((value:string) => {
      this.router.navigate(["/"]);
      if(value.length) {
        this.routerActivated = false;
        this.wholeData = this.wholeDataMap.get("initialData");
        this.wholeData = <any>this.wholeData.filter((el:any) => el.text.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
      } else {
        this.wholeData = this.wholeDataMap.get("initialData");
      }
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
