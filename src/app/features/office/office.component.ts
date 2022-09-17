import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})
export class OfficeComponent implements OnInit {

  offices:any[] = [];
  officesMap = new Map();

  constructor(private appService:AppService) { }

  ngOnInit(): void {
    this.appService.$searchQueryChange.subscribe((value:string) => {
      if(!value.length) {
        this.offices = this.officesMap.get("initialData");
      } else {
        this.offices = this.officesMap.get("initialData");
        this.offices = <any>this.offices.filter((el:any) => el.text.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
      }
    })
  }

}
