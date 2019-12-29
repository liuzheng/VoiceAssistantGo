import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent, PagesComponents} from './pages/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PluginModules} from './plugins/plugins';
import {MAT_LABEL_GLOBAL_OPTIONS} from '@angular/material';
import {Pipes} from './pips/pipes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppService, LocalStorageService, LogService, UUIDService} from './app.service';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    ...PagesComponents,
    ...Pipes,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    ...PluginModules,
  ],
  providers: [
    AppService, LocalStorageService, LogService, UUIDService,
    CookieService,
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
