import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ModalError, ModalService} from '../../core/modal.service';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent implements OnInit, OnDestroy {

  public open = false;

  private subscription: Subscription;

  public error: ModalError;

  constructor(private modalService: ModalService) {
  }

  public ngOnInit(): void {
    this.subscription = this.modalService.error.subscribe(item => this.show(item));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private show(error: ModalError): void {
    this.error = error;
    if (error) {
      this.open = true;
    }
  }

  reload(): void {
    this.dismiss();
    this.error.callback();
  }

  dismiss(): void {
    this.open = false;
  }
}
