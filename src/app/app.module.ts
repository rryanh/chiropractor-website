import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home.component';
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
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { OurTeamPageComponent } from './pages/our-team-page/our-team-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { JoinUsPageComponent } from './pages/join-us-page/join-us-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AwardsPageComponent } from './pages/awards-page/awards-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
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
    ServicesPageComponent,
    AboutUsPageComponent,
    OurTeamPageComponent,
    BlogPageComponent,
    JoinUsPageComponent,
    Error404PageComponent,
    LandingPageComponent,
    AwardsPageComponent,
    ContactPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
