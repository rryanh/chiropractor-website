import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css', './contact-us.queries.css'],
})
export class ContactUsComponent implements OnInit {
  zoom = 18;
  center = { lat: 49.8623017, lng: -119.4925581 };
  contactForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.pattern('[- +()0-9]+')]],
      email: [null, [Validators.required, Validators.email]],
      address: [null, [Validators.required]],
      visited: [null, [Validators.required]],
      message: [null, [Validators.required]],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  submitForm() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.contactForm.value, null, 4));
    // this.http.post();
    this.onReset();
  }

  onReset() {
    this.submitted = false;
    this.contactForm.reset();
  }
}
