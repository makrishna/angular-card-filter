import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {

  @Input() info: { image: string, text: string } = { image: "", text: "" }

  image: ElementRef = <any>{}

  @ViewChild('image') set content(content: ElementRef) {
    this.image = content;
    if (this.appService.opactyValue != undefined) {
      this.image.nativeElement.style.opacity = this.appService.opactyValue;
    }
  }
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.$rangeValueChange.subscribe((val: any) => {
      this.image.nativeElement.style.opacity = val/10;
      this.appService.opactyValue = val/10;
    })
  }

}
