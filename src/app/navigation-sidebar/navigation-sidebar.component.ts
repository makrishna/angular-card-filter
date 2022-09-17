import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navigation-sidebar',
  templateUrl: './navigation-sidebar.component.html',
  styleUrls: ['./navigation-sidebar.component.scss']
})
export class NavigationSidebarComponent implements OnInit {

  constructor(public appService:AppService) { }

  menuItems = [
    { name: "Butterfly", active: false, link: "/cards/butterfly" },
    { name: "Cars", active: false, link: "/cards/cars" },
    { name: "Mobile Phones", active: false, link: "/cards/cellphones" },
    { name: "Office", active: false, link: "/cards/office" }
  ];

  ngOnInit(): void {

  }

  menuItemClick(i: number) {
    this.menuItems.forEach(el => el.active = false);
    this.menuItems[i].active = true;
  }

  rangeChange($event:any) {
    this.appService.rangeValueChanged(parseFloat($event.srcElement.value))
  }


}
