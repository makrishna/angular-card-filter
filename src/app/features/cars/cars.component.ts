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

  }

}
