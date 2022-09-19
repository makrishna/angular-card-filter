import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-butterflies',
  templateUrl: './butterflies.component.html',
  styleUrls: ['./butterflies.component.scss']
})
export class ButterfliesComponent implements OnInit {

  butterflies = [];
  butterFliesMap = new Map();

  constructor(private appService:AppService) { }

  ngOnInit(): void {

  }

}
