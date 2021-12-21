import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobbyComponent } from './lobby/lobby.component';
import { LobbyRoutingModule } from './lobby-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbDropdownModule, NgbNavModule, NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [LobbyComponent],
  imports: [
    CommonModule,
    LobbyRoutingModule,
    ScrollingModule,
    FormsModule,
    FontAwesomeModule,
    NgbNavModule,
    NgbTypeaheadModule,
    NgbDropdownModule
  ]
})
export class LobbyModule { }
