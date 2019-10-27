import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LinksButtonsModule } from '@caiocampos/links-buttons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app.component';
import { TabsComponent } from './component/tabs/tabs.component';
import { TabComponent } from './component/tab/tab.component';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { BaconIpsumComponent } from './component/bacon-ipsum/bacon-ipsum.component';
import { AboutComponent } from './component/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
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
    LinksButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
