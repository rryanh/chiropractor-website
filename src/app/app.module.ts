import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { OfferComponent } from './components/offer/offer.component';
import { ChiroComponent } from './svg/chiro/chiro.component';
import { AcuComponent } from './svg/acu/acu.component';
import { MassageComponent } from './svg/massage/massage.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { ServiceInfoOneComponent } from './svg/service-info-one/service-info-one.component';
import { ServiceInfoTwoComponent } from './svg/service-info-two/service-info-two.component';
import { ServiceInfoThreeComponent } from './svg/service-info-three/service-info-three.component';
import { ServiceInfoFourComponent } from './svg/service-info-four/service-info-four.component';
import { ChiroServicesComponent } from './components/chiro-services/chiro-services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { IonicModule } from '@ionic/angular';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ReviewComponent } from './components/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    OfferComponent,
    ChiroComponent,
    AcuComponent,
    MassageComponent,
    OurServicesComponent,
    ServiceInfoOneComponent,
    ServiceInfoTwoComponent,
    ServiceInfoThreeComponent,
    ServiceInfoFourComponent,
    ChiroServicesComponent,
    TestimonialsComponent,
    ContactUsComponent,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
