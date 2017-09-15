import { AppComponent } from '../app.component';
import { Component, OnInit, forwardRef, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  app: AppComponent;

  constructor(@Inject(forwardRef(() => AppComponent)) app: AppComponent) { this.app = app; }

  ngOnInit() {
  }

}
