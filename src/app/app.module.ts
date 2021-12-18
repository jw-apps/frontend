import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieModule } from 'ngx-cookie';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faCircle as faCircleSolid, faHome, faSignOutAlt, faUserFriends, faUserPlus, faUsersCog} from '@fortawesome/free-solid-svg-icons';
import {faCircle as faCircleRegular, faUserCircle} from '@fortawesome/free-regular-svg-icons';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CookieModule.forRoot(),
    HttpClientModule,
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faUserFriends, faCircleSolid, faCircleRegular, faUserCircle, faUserPlus, faHome, faUsersCog, faSignOutAlt);
  }
}
