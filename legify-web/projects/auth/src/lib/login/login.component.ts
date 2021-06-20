import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShellFooterItem } from '@legify/web-core';
import { Subscription } from 'rxjs';
import { UserLoginCredentials } from './models/user-login-credentials';

@Component({
  selector: 'legify-web-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  @Input() showError;
  @Input() greetingText = '';
  @Input() footerItems: ShellFooterItem[] = [];
  @Input() usernameFieldPlaceholder = '';

  @Output() handleLogin: EventEmitter<UserLoginCredentials> =
    new EventEmitter();
  @Output() handleValueChanges: EventEmitter<boolean> = new EventEmitter();

  public authFormGroup: FormGroup;
  protected usernameFieldName = 'username';
  protected passwordFieldName = 'password';
  protected formFieldValueChangesSub: Subscription;

  constructor(protected formBuilder: FormBuilder) {}

  get loginGreetingText(): string {
    return this.greetingText || 'Welcome';
  }

  ngOnInit(): void {
    this.authFormGroup = this.formBuilder.group({
      [this.usernameFieldName]: ['', Validators.required],
      [this.passwordFieldName]: ['', Validators.required]
    });

    this.formFieldValueChangesSub = this.authFormGroup.valueChanges.subscribe(
      (_) => {
        this.handleValueChanges.emit(this.showError);
      }
    );
  }

  public doLogin(): void {
    const username =
      this.authFormGroup.controls[this.usernameFieldName].value ?? '';
    const password =
      this.authFormGroup.controls[this.passwordFieldName].value ?? '';
    this.handleLogin.emit({
      password,
      username
    });
  }

  ngOnDestroy(): void {
    if (this.formFieldValueChangesSub) {
      this.formFieldValueChangesSub.unsubscribe();
    }
  }
}
