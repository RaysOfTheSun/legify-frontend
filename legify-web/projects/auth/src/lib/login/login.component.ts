import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShellFooterItem } from '@legify/web-core';
import { LegifyLoginService } from './services';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { take, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'legify-web-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  @Input() greetingText = '';
  @Input() usernameFieldPlaceholder = '';

  public authFormGroup: FormGroup;

  protected usernameFieldName = 'username';
  protected passwordFieldName = 'password';

  protected formFieldValueChangesSub: Subscription;
  protected readonly showErrorSubj: BehaviorSubject<boolean> =
    new BehaviorSubject(false);

  constructor(
    protected formBuilder: FormBuilder,
    protected legifyLoginService: LegifyLoginService
  ) {}

  get loginGreetingText(): string {
    return this.greetingText || 'Welcome';
  }

  get footerItems$(): Observable<ShellFooterItem[]> {
    return this.legifyLoginService.getFooterItems();
  }

  get showError$(): Observable<boolean> {
    return this.showErrorSubj.asObservable();
  }

  ngOnInit(): void {
    this.authFormGroup = this.formBuilder.group({
      [this.usernameFieldName]: ['', Validators.required],
      [this.passwordFieldName]: ['', Validators.required]
    });

    this.formFieldValueChangesSub = this.authFormGroup.valueChanges
      .pipe(withLatestFrom(this.showError$))
      .subscribe((isErrorShown) => {
        if (isErrorShown) {
          this.showErrorSubj.next(false);
        }
      });
  }

  public doLogin(): void {
    const username =
      this.authFormGroup.controls[this.usernameFieldName].value ?? '';
    const password =
      this.authFormGroup.controls[this.passwordFieldName].value ?? '';

    this.legifyLoginService
      .doLogin(username, password)
      .pipe(take(1))
      .subscribe((isAuthenticated) => {
        if (!isAuthenticated) {
          this.showErrorSubj.next(true);
        }
      });
  }

  ngOnDestroy(): void {
    if (this.formFieldValueChangesSub) {
      this.formFieldValueChangesSub.unsubscribe();
    }
  }
}
