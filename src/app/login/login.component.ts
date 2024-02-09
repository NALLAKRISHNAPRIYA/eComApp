import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
  userName: string ='';
  password: any ='';
  constructor() {}

  ngOnInit(): void {
   
  }
  login() {
    console.log('login component')
  }


}




