import { Injectable } from '@angular/core';
import  {BehaviorSubject } from 'rxjs';

export class ModalError {
  constructor(public message: string, public callback: () => void) {}
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  /**
   * @ignore
   */
    // tslint:disable-next-line:variable-name
  private _errorString = new BehaviorSubject<ModalError>(null);

  /**
   * An Observable to which a modal can subscribe to always receive the newest error
   */
  public error = this._errorString.asObservable();

  /**
   * Show an error message
   *
   * @param error the error
   */
  public showError(error: ModalError): void {
    this._errorString.next(error);
  }
}
