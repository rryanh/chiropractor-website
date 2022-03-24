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
  center = { lat: 49.8621317, lng: -119.4922075 };
  contactForm!: FormGroup;
  submitted = false;
  label = {
    text: `Harmony Chiropractic`,
    className: 'google-marker',
    fontSize: '1.8rem',
    fontWeight: 'bold',
  };
  title = 'marker.title';

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

  openMap() {
    window.open(
      `https://www.google.com/maps/place/Chiropractor+Kelowna+-+Harmony+Chiropractic+%26+Wellness+Clinic/@49.86219,-119.492136,19z/data=!4m12!1m6!3m5!1s0x0:0xd0f202fd382f9008!2sChiropractor+Kelowna+-+Harmony+Chiropractic+%26+Wellness+Clinic!8m2!3d49.8621375!4d-119.4920523!3m4!1s0x0:0xd0f202fd382f9008!8m2!3d49.8621375!4d-119.4920523?hl=en-US`,
      '_blank'
    );
  }

  onReset() {
    this.submitted = false;
    this.contactForm.reset();
  }
}
