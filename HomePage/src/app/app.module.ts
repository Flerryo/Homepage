import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui';
import { SuiSidebarModule } from 'ng2-semantic-ui';
import { GalleriaModule, TabMenuModule, OverlayPanelModule, ButtonModule, PanelModule, AccordionModule,
         } from 'primeng/primeng';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { appRoutes } from './app.routes';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MalereiComponent } from './malerei/malerei.component';
import { AcrylComponent } from './acryl/acryl.component';
import { BiographieComponent } from './biographie/biographie.component';
import { AusstellungComponent } from './ausstellung/ausstellung.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    GallerieComponent,
    FooterComponent,
    HomeComponent,
    MalereiComponent,
    AcrylComponent,
    BiographieComponent,
    AusstellungComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SuiModule,
    SuiSidebarModule,
    GalleriaModule,
    TabMenuModule,
    OverlayPanelModule,
    ButtonModule,
    PanelModule,
    AccordionModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
