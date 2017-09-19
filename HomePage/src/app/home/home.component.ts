import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  kunstwerke: any[];

  constructor() { }

  ngOnInit() {
    this.kunstwerke = [];
        this.kunstwerke.push({source: 'assets/images/bild1.jpg', alt: 'Striche auf Leinwand', title: 'Allerlei'});
        this.kunstwerke.push({source: 'assets/images/hund1.jpg', alt: 'Wau Wau', title: 'Hundilein'});
        this.kunstwerke.push({source: 'assets/images/landschaft1.jpg', alt: 'Herrliche Landschaft', title: 'Landschaft'});
    }

}
