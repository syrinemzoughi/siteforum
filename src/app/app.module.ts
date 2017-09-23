import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import {  RoutingModule }  from './routing/routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormulaireResumeComponent } from './formulaire-resume/formulaire-resume.component';
import { UserService } from './formulaire-resume/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormulaireResumeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
    RoutingModule,
],

  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
