import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {TestService} from './test.service';
import { SliderComponent } from './slider/slider.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { FromSubmitComponent } from './from-submit/from-submit.component';
const appRoutes: Routes = [
  { path: 'submited', component: FromSubmitComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: '', component: HomeComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProfileComponent,
    HomeComponent,
    SliderComponent,
    ContactComponent,
    FromSubmitComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
