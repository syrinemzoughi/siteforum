import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from '../app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { UserService } from '../formulaire-resume/user.service';
import { FormulaireResumeComponent } from '../formulaire-resume/formulaire-resume.component';
const appRoutes: Routes = [
  { 
      path: 'home',
      component: HomeComponent,
        
   },
   { 
    path: 'formulaireresume',
    component: FormulaireResumeComponent,
      
 },
      // otherwise redirect to home
      { path: '**', redirectTo: '' }
    ];
    @NgModule({
      declarations: [],
      imports: [RouterModule.forRoot(appRoutes)],
      providers: [UserService],
      bootstrap: [],
      exports: [RouterModule]
    })
    
export class RoutingModule { }
