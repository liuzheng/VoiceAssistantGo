import {MaterialModule} from './MaterialModule.component';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgProgressModule} from 'ngx-progressbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ToastrModule} from 'ngx-toastr';

import {HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export const PluginModules = [
  BrowserAnimationsModule,
  NgProgressModule,
  MaterialModule,
  LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR}),
  NgxDatatableModule,
  FlexLayoutModule,
  ToastrModule.forRoot(), // ToastrModule added
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  }),
];
