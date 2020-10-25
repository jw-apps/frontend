import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobbyComponent } from './lobby/lobby.component';
import { LobbyRoutingModule } from './lobby-routing.module';
import { ClrIconModule } from '@clr/angular';
import { ScrollingModule } from '@angular/cdk/scrolling';



@NgModule({
  declarations: [LobbyComponent],
  imports: [
    CommonModule,
    LobbyRoutingModule,
    ClrIconModule,
    ScrollingModule
  ]
})
export class LobbyModule { }
