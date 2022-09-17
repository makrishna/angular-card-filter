import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars = [];
  carsMap = new Map();

  constructor(private appService:AppService) { }

  ngOnInit(): void {
    this.appService.$searchQueryChange.subscribe((value:string) => {
      if(!value.length) {
        this.cars = this.carsMap.get("initialData");
      } else {
        this.cars = this.carsMap.get("initialData");
        this.cars = <any>this.cars.filter((el:any) => el.text.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
      }
    })
  }

}
