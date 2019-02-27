import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model: any = {};
  registerMode = false;
  constructor(private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  //userRegister() {
  //    this.userService.registerUser(this.model)
  //    .subscribe(() => {
//          this.alertify.success('User ' + this.model.email + ' has been created!');
//        }, error => {
//            this.alertify.error('Error@ ' + error );
//        });
//  }

  userLogin() {

  }
  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
  loggedIn() {
    // return this.authService.loggedIn();
  }

}
