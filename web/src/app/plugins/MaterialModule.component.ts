import {NgModule} from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule, MatTreeModule, MatIconRegistry,
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {DomSanitizer} from '@angular/platform-browser';

// tslint:disable-next-line:class-name
class icon {
  name: string;
  path?: string;
}

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatIconModule
  ]
})
export class MaterialModule {
  icons: Array<icon>;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.icons = [
      {name: 'index'},
      {name: 'notifications'},
      {name: 'search'},
      {name: 'face'},
      {name: 'desktop_mac'},
      {name: 'developer_board'},
      {name: 'ansible'},
      {name: 'taskset'},
      {name: 'history'},
      {name: 'firewall'},
      {name: 'account_tree'},
      {name: 'dashboard'},
      {name: 'person'},
      {name: 'settings'},
      {name: 'console'},
      {name: 'ansible'},
      {name: 'windows'},
      {name: 'linux'},
      {name: 'expand_more'},
      {name: 'chevron_right'},
      {name: 'file-tree'},
      {name: 'menu-right'},
      {name: 'menu-left'},
      {name: 'notification_important'},
    ];
    this.icons.forEach((i: icon) => {
      iconRegistry.addSvgIcon(
        i.name,
        sanitizer.bypassSecurityTrustResourceUrl(i.path || '/assets/icons/' + i.name + '.svg')
      );
    });
  }
}
