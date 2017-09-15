import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui';
import { SuiSidebarModule } from 'ng2-semantic-ui';
import { GalleriaModule } from 'primeng/primeng';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    GallerieComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    SuiSidebarModule,
    GalleriaModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }