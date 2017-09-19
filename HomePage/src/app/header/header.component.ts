import { AppComponent } from '../app.component';
import { Component, OnInit, forwardRef, Inject, Input, AfterViewInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
  

export class HeaderComponent implements OnInit, AfterViewInit {
  
  @Input() isStacked: boolean;
  
  private app: AppComponent;
  public headerItems: MenuItem[];
  


  constructor(@Inject(forwardRef(() => AppComponent)) app: AppComponent) { this.app = app; }

  ngOnInit(): void {
    this.headerItems = [
            {label: 'Home', routerLink: "/Home"},
            {label: 'Gallerie', routerLink: "/Gallerie"},
            {label: 'Malerei', routerLink: "/Malerei"},
            {label: 'Acryl', routerLink: "/Acryl"},
            {label: 'Biographie', routerLink: "/Biographie"},
            {label: 'Ausstellungen', routerLink: "/Ausstellung"}
        ];
  }
    
  
  ngAfterViewInit(): void {
    
  }

}
