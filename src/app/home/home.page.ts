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
  MyName: string = "Daniel Ulybin"
  MyList: string[] = ["1", "2", "3"]
  MyCities: City[] = [
    {name: "Moscow", population: 14},
    {name:"Saint-Petersburg", population: 7}
  ]
  constructor() {}
  btn_click(){
    this.MyName = this.MyName + "!"
  }

}
