import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-cell-phones',
  templateUrl: './cell-phones.component.html',
  styleUrls: ['./cell-phones.component.scss']
})
export class CellPhonesComponent implements OnInit {

  cellphones:any[] = [];
  cellphonesMap = new Map();

  constructor(private appService:AppService) { }

  ngOnInit(): void {
    this.appService.$searchQueryChange.subscribe((value:string) => {
      if(!value.length) {
        this.cellphones = this.cellphonesMap.get("initialData");
      } else {
        this.cellphones = this.cellphonesMap.get("initialData");
        this.cellphones = <any>this.cellphones.filter((el:any) => el.text.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
      }
    })
  }

}
