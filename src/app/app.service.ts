import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()

export class AppService {

    opactyValue = 1;

    constructor() {

    }

    private rangeValueChange: Subject<any> = new Subject<any>();
    $rangeValueChange = this.rangeValueChange.asObservable();

    rangeValueChanged(value:any) {
        this.rangeValueChange.next(value)
    }

    private searchQueryChange: Subject<string> = new Subject<string>();
    $searchQueryChange = this.searchQueryChange.asObservable();

    searchQueryChanged(value:string) {
        this.searchQueryChange.next(value)
    }

}