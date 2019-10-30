import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LinksButtonsModule } from '@caiocampos/links-buttons';

import { TabsModule } from '../../projects/caiocampos/tabs/src/lib/tabs.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app.component';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { BaconIpsumComponent } from './component/bacon-ipsum/bacon-ipsum.component';
import { AboutComponent } from './component/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    BaconIpsumComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    LinksButtonsModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
