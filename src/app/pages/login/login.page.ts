import { UtilService } from './../../util.service';
import { AuthenticateService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(

    private navCtrl: NavController,
    private util: UtilService,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder

  ) { }

  // tslint:disable-next-line: variable-name
  validations_form: FormGroup;
  errorMessage = '';

  // tslint:disable-next-line: variable-name
  validation_messages = {
    email: [
      { type: 'required', message: 'Introduceti un email.' },
      { type: 'pattern', message: 'Introduceti un email valid.' }
    ],
    password: [
      { type: 'required', message: 'Introduceti o parola.' },
      { type: 'minlength', message: 'Parola trebuie sa contina minim 5 caractere.' }
    ]
  };

  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }


  loginUser(value) {
    this.authService.loginUser(value)
      .then(res => {
        console.log(res);
        this.errorMessage = '';
        this.navCtrl.navigateForward('/dashboard');
      }, err => {
        this.errorMessage = err.message;
      });
  }
  login() {
    this.util.setMenuState(true);
    this.navCtrl.navigateRoot('/dashboard', {animationDirection: 'forward'});
  }
}
