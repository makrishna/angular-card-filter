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

  }

}
