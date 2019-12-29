import {Injectable, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../environments/environment';
import {NGXLogger} from 'ngx-logger';
// import * as UUID from 'uuid-js/lib/uuid.js';
import {TranslateService} from '@ngx-translate/core';

declare function unescape(s: string): string;


@Injectable()
export class LogService {
  level: number;

  constructor(private logger: NGXLogger) {
    // 0.- Level.OFF
    // 1.- Level.ERROR
    // 2.- Level.WARN
    // 3.- Level.INFO
    // 4.- Level.DEBUG
    // 5.- Level.LOG
    this.level = 4;
  }

  log(message: any, ...additional: any[]) {
    if (this.level > 4) {
      this.logger.log(message, ...additional);
    }
  }

  debug(message: any, ...additional: any[]) {
    if (this.level > 3) {
      this.logger.debug(message, ...additional);
    }
  }

  info(message: any, ...additional: any[]) {
    if (this.level > 2) {
      this.logger.info(message, ...additional);
    }
  }

  warn(message: any, ...additional: any[]) {
    if (this.level > 1) {
      this.logger.warn(message, ...additional);
    }
  }

  error(message: any, ...additional: any[]) {
    if (this.level > 0) {
      this.logger.error(message, ...additional);
    }
  }

}

@Injectable()
export class LocalStorageService {
  constructor() {

  }

  get(key: string): string {
    return localStorage.getItem(key);
  }

  set(key: string, value: string) {
    return localStorage.setItem(key, value);
  }

  getJSON(key: string): any {
    return localStorage.getItem(key);
  }

  setJSON(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  delete(key: string) {
    return localStorage.removeItem(key);
  }
}

@Injectable()
export class AppService {
  // user:User = user  ;

  constructor(private router: Router,
              private logger: LogService,
              private cookie: CookieService,
              private localStorage: LocalStorageService,
              private trans: TranslateService) {
    if (this.cookie.get('loglevel')) {
      // 0.- Level.OFF
      // 1.- Level.ERROR
      // 2.- Level.WARN
      // 3.- Level.INFO
      // 4.- Level.DEBUG
      // 5.- Level.LOG
      this.logger.level = parseInt(this.cookie.get('loglevel'), 10);
      // this.logger.debug('Your debug stuff');
      // this.logger.info('An info');
      // this.logger.warn('Take care ');
      // this.logger.error('Too late !');
      // this.logger.log('log !');
    } else {
      this.cookie.set('loglevel', '0', 99, '/', document.domain);
      // this.logger.level = parseInt(Cookie.getCookie('loglevel'));
      this.logger.level = 0;
    }

    if (environment.production) {
      this.logger.level = 2;
    }

  }


  getQueryString(name) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return null;
  }

  translate(lang: string) {
    this.trans.use(lang);
    this.localStorage.set('lang', lang);
  }

  transEN() {
    this.translate('en');
  }

  transCN() {
    this.translate('cn');
  }
}

@Injectable()
export class UUIDService {
  constructor() {

  }

  // gen() {
  //   return UUID.create()["hex"];
  // }
}

