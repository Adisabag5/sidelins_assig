import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form:FormGroup;

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private authService: AuthService,
    private store: StoreService,
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
        if(loggedUser.length == 0){
          loggedUser = {id: rest.length, usernam: this.form.value.username, password: this.form.value.password};
          rest.push(loggedUser)
          this.store.setUsers(rest);
          //set logged user local storage
          localStorage.setItem('username', loggedUser.username)
          localStorage.setItem('user_id', loggedUser.id)
          localStorage.setItem('user_token', loggedUser.id + loggedUser.username)
          //navigate back to home
          this.router.navigateByUrl('home')
        }
        
        //username exist
      },
      error => {}
      )

  }
  

}
