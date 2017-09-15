import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<div class="app-wrapper">

  <app-header [isStacked]="isStacked">
  </app-header>

</div>

`
  ,
  styleUrls: ['./app.component.css'],
  
})
  
export class AppComponent implements OnInit {

  public isStacked: boolean;

  constructor() {
    
  }
  
  ngOnInit() {
    
    // die Breite überprüfen
    this.checkWidth();
    
  }
  
  /**
   * Hier überprüfen wir die Breite und schauen ob wir Mobiles Layout verwenden 
   * müssen oder für den Desktop
   */
  private checkWidth() {
    if (window.innerWidth < 481) {
      this.isStacked = true;
      return;
    }
    
    this.isStacked = false;
  }
 
}
