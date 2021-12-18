import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../core/token.service';

@Component({
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    this.tokenService.clear();
  }

}
