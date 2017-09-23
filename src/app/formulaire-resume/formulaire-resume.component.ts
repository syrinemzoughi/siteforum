import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms'
import { UserService } from './user.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-formulaire-resume',
  templateUrl: './formulaire-resume.component.html',
  styleUrls: ['./formulaire-resume.component.css']
})



export class FormulaireResumeComponent implements OnInit {
  loading = false;
  constructor(private router: Router,
    private userService: UserService,
    ) { }

    ngOnInit(){}
  /*  ngOnInit(): void {
      this.f = new FormGroup({
        'firstName': new FormControl(this.nom, [
          Validators.required
        ]),
        'alterEgo': new FormControl(this.nom.alterEgo)
       
      });
    }
    
    get name() { return this.f.get('firstName'); }*/
   
//}

  addresume(form: NgForm){
    this.loading = true;
    this.userService.createuser(form)

        .subscribe(
            data => {
              
                alert('Registration successful');
               // this.router.navigate(['/login']);
            },
            error => {
                alert(error);
                this.loading = false;
                
            });

  }

  //verification(userForm: NgForm) {
    //if (userForm.controls["firstName"]);
 //}
}


