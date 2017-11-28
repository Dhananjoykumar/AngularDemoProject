import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
// import { sign } from 'jsonwebtoken';
// import * as fs from 'fs';
// import { hmacSHA512 } from 'crypto-js/hmac-sha512';
// import { Base64 } from 'crypto-js/enc-base64';
// import { sha256 } from 'crypto-js/sha256';
import * as moment from 'moment';
import * as swal from 'sweetalert';
// import { IMathJsStatic } from '@types/mathjs';
// import * as jwt from 'jsonwebtoken';
// import swal from 'sweetalert2';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { MySociety } from 'app/models/mysociety';
import { EncryptionService } from 'app/pages/service/encryption.service';


@Injectable()
export class AuthenticationService {
  public userDetails: MySociety[];
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http, private router: Router, private token: EncryptionService) {
    this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
    // console.log('AuthenticationService Intialized');
  }
  authenticateUser(userCredentials: MySociety) {
    // console.log(this.token.encrypt(userCredentials.userMobileNo));
    userCredentials.encryptData = this.token.encrypt(userCredentials.userMobileNo);
    // console.log(userCredentials);

    this.http.post('http://192.168.0.20:8080/mysociety/societyapp/login',
     JSON.stringify(userCredentials), this.options)
      .map(res => res.json()['response'])
      .subscribe(data => {
        this.userDetails = data;
        // console.log(this.userDetails);
        // var a: any;
        if (this.userDetails != null) {
          localStorage.setItem('ud_key', userCredentials.encryptData);
          localStorage.setItem('userMobile', userCredentials.userMobileNo);
         // sessionStorage.setItem('ud_key', userCredentials.encryptData);
          // console.log(localStorage.getItem('ud_key'));
          localStorage.setItem('role', this.userDetails[0].roleId);
         // sessionStorage.setItem('role', this.userDetails[0].roleId);
          // window.alert('You are logged in!!!');
          // swal({title: 'Hurray!', text: 'You are logged in!', type: 'success'});
          swal('Hurray!!!', 'You are logged in....', 'success');
          this.router.navigateByUrl('');
        } else {
          // window.alert('Invalid Credentials');
          swal('Oops!', 'Wrong credentails!', 'error');
          this.router.navigateByUrl('/pages/login');  // 7758830641
        }
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('ud_key');
    localStorage.removeItem('userMobile');
        // localStorage.removeItem('ud_key');
    swal('Hurray!!!', 'You are logged out', 'success');
    this.router.navigateByUrl('/pages/login');
  }

}
