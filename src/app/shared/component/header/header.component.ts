import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public mobileView = false;

  constructor() { }

  ngOnInit(): void {
    if (window.screen.width > 450) {
      this.mobileView = true;
    }
  }

}
