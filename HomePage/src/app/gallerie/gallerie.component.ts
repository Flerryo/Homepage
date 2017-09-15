import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {
  images: any[];

  constructor() { }

  ngOnInit() {
        this.images = [];
        this.images.push({source: 'assets/images/hund1.jpg', alt: 'Hier kommt die Beschreibung fuer Bild 1', title: 'Titel 1'});
        this.images.push({source: 'assets/images/bild1.jpg', alt: 'Hier kommt die Beschreibung fuer Bild 2', title: 'Titel 2'});
        this.images.push({source: 'assets/images/landschaft1.jpg', alt: 'Hier kommt die Beschreibung fuer Bild 3', title: 'Titel 3'});
  }

}
