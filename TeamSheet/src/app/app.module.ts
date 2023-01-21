import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DealsModule } from './deals/deals.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports:[

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	DealsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
