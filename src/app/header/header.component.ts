import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private appService:AppService) { }

  ngOnInit(): void {
  }

  search(value:string) {
    this.appService.searchQueryChanged(value);
  }

}
