import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { AwardsPageComponent } from './pages/awards-page/awards-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { HomePageComponent } from './pages/home-page/home.component';
import { JoinUsPageComponent } from './pages/join-us-page/join-us-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { OurTeamPageComponent } from './pages/our-team-page/our-team-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: LandingPageComponent },
  { path: 'about-us', component: AboutUsPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'join-us', component: JoinUsPageComponent },
  { path: 'our-team', component: OurTeamPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'awards', component: AwardsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', component: Error404PageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
