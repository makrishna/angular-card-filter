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
    this.appService.$searchQueryChange.subscribe((value:string) => {
      if(!value.length) {
        this.butterflies = this.butterFliesMap.get("initialData");
      } else {
        this.butterflies = this.butterFliesMap.get("initialData");
        this.butterflies = <any>this.butterflies.filter((el:any) => el.text.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
      }
    })
  }

}
