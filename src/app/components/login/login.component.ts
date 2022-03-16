import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private authService: AuthService,
    private httpService: HttpService
  ) { 
    this.form = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
  });
  }

  ngOnInit(): void {
  }

  
  onSubmit(){
    //validate user input
    console.log(this.form.value)
    if(this.form.value.username == ''){
      return;
    }

    // check if user exist
    this.authService.login().subscribe(
      (rest: any) => {
        console.log(rest)
        let loggedUser = rest.filter( (item: any) => item.username == this.form.value.username)
        if(loggedUser.length > 0){

          if(loggedUser[0].password == this.form.value.password){
            //set logged user local storage
            localStorage.setItem('username', loggedUser[0].username)
            localStorage.setItem('user_id', loggedUser[0].id)
            localStorage.setItem('user_token', loggedUser[0].id)
            //navigate back to home
            this.router.navigateByUrl('home')
          }

          //wrong password
          
        }
      },
      error => {}
      )

  }
  

}
