import { Component } from '@angular/core';

interface City {
  name: string
  population: number
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  MyName: string = "lbn"
  MyList: string[] = ["1", "2", "3"]
  MyCities: 
  constructor() {}
  btn_click(){
    this.MyName = this.MyName + "!"
  }

}
