import { AppComponent } from '../app.component';
import { Component, OnInit, AfterViewInit, forwardRef, Inject } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {
  
  private sidebar;
  private app: AppComponent;

  constructor(@Inject(forwardRef(() => AppComponent)) app: AppComponent) { this.app = app; }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
  }

}
