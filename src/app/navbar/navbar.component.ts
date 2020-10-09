import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public loggedIn;
  public ch ;
  public cm ;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private cookieService: CookieService, private breakpointObserver: BreakpointObserver) { }
  checkType(){
    if (this.cookieService.get("type") == "clearing_house") {
      this.loggedIn = true;
      this.ch = true;
    }
    else if (this.cookieService.get("type") == "clearing_member") {
      this.loggedIn = true;
      this.cm = true;
    }
  }
 
  deleteCookie() {
    this.cookieService.delete("token");
    this.cookieService.delete("type");
  }


}
