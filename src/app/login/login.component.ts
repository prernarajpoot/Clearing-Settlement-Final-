import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppComponent } from '../app.component';
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

export interface Login {
  type: string;
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public getData = [];
  public memberType = "";
  constructor(private router: Router, private _httpService: LoginService, private cookieService: CookieService) { }

  onClick(item: NgForm) {
    this._httpService.getSessionToken(item.value["email"], item.value["password"]).subscribe(data => { console.log(data); this.getData = data; this.cookieService.set("type", data["type"]); this.cookieService.set("token", data["token"]); console.log(this.cookieService.get("token")) });
    setTimeout(() => {
      this.memberType = this.cookieService.get("type");
    if (this.memberType != "invalid_credentials") {
      if (this.memberType == "clearing_house") {
        this.router.navigate(['overview']);
      }
      else if (this.memberType == "clearing_member") {
        this.router.navigate(['cm-overview']);
      }
    }
    else{
      alert("Wrong Username or Password. Try Again!");
    }
  }, 5000);
  }
  ngOnInit() {
  }
}
