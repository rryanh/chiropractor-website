import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header.queries.css'],
})
export class HeaderComponent implements OnInit {
  sideNav = false;
  constructor() {}

  ngOnInit(): void {}

  showMobileNav() {
    this.sideNav = true;
  }

  hideMobileNav() {
    this.sideNav = false;
  }

  mobileNavClick() {
    this.sideNav = false;
  }
}
