import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthGuard} from './auth.guard';
import {EnvironmentService} from './environment.service';
import {ModalService} from './modal.service';
import {RestHelperService} from './rest-helper.service';
import {TokenService} from './token.service';
import {TokenStorageService} from './token-storage.service';
import {WebsocketService} from './websocket.service';
import {RestAuthService} from './rest-auth.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthGuard,
    EnvironmentService,
    ModalService,
    RestHelperService,
    TokenService,
    TokenStorageService,
    WebsocketService,
    RestAuthService
  ]
})
export class CoreModule { }
