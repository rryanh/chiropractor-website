import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css', './contact-us.queries.css'],
})
export class ContactUsComponent implements OnInit {
  zoom = 18;
  center = { lat: 49.8623017, lng: -119.4925581 };

  constructor() {}

  ngOnInit(): void {}
}
