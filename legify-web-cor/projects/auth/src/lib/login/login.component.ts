import { Component, OnInit } from '@angular/core';
import { ShellFooterItem } from '@legify/web-core';
import { UserLoginCredentials, LegifyLoginService } from '@legify/web-auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public footerItems: ShellFooterItem[] = [];
  protected showErrorSubj: BehaviorSubject<boolean>;

  constructor(protected legifyLoginService: LegifyLoginService) {}

  ngOnInit(): void {
    this.showErrorSubj = new BehaviorSubject(false);
    this.footerItems = [
      {
        displayText: 'Terms and Conitions',
        routerLink: ['terms'],
        disabled: false
      }
    ];
  }

  get showError$(): Observable<boolean> {
    return this.showErrorSubj.asObservable();
  }

  public handleValueChanges(isErrorShown: boolean): void {
    if (isErrorShown) {
      this.showErrorSubj.next(false);
    }
  }

  public handleLogin({ username, password }: UserLoginCredentials): void {
    this.legifyLoginService
      .doLogin(username, password)
      .pipe(take(1))
      .subscribe((isAuthenticated) => {
        this.showErrorSubj.next(!isAuthenticated);
      });
  }
}
