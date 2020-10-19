import { NgModule } from '@angular/core';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { ClrModalModule } from '@clr/angular';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [
    ClrModalModule,
    CommonModule
  ],
  exports: [ErrorDialogComponent]
})
export class AppCenterCommonModule { }
