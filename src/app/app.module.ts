import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LsidebarComponent } from './layout/lsidebar/lsidebar.component';
import { RsidebarComponent } from './layout/rsidebar/rsidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MaincontentComponent } from './layout/maincontent/maincontent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LsidebarComponent,
    RsidebarComponent,
    FooterComponent,
    MaincontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
