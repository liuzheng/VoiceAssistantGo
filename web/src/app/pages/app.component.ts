import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AppService} from '../app.service';
// import {Globals} from '../globals';
import {ActivatedRoute, Router} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';

// import {ApiService, Response} from '../api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  browserLang: any;

  constructor(private translate: TranslateService,
              private router: Router,
              private appService: AppService,
              // private globals: Globals,
              // private api: ApiService
  ) {
    translate.addLangs(['en', 'cn']);
    translate.setDefaultLang('en');

    this.browserLang = translate.getBrowserLang();
    if (this.browserLang.match(/zh/)) {
      this.appService.transCN();
    } else {
      this.appService.translate(this.browserLang.match(/en|cn/) ? this.browserLang : 'en');
    }
    // this.api.installCheck()
    //   .subscribe(
    //     (response: Response) => {
    //       if (!response.data) {
    //         this.router.navigateByUrl('/install');
    //       }
    //     }
    //   );

  }
}

export const PagesComponents = [
  NavbarComponent,
  FooterComponent,
  SidebarComponent
];
