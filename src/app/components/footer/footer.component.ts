import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', './footer.queries.css'],
})
export class FooterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}
  newsletterForm!: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.newsletterForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  get f() {
    return this.newsletterForm.controls;
  }

  submitForm() {
    this.submitted = true;

    if (this.newsletterForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.newsletterForm.value, null, 4));
    // this.http.post();
    this.onReset();
  }

  onReset() {
    this.submitted = false;
    this.newsletterForm.reset();
  }
}
