import { Component, Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { distinctUntilChanged, skipWhile } from 'rxjs/operators';
import { ILoginRequest } from 'src/app/core/models/auth';
import { UserFacade } from 'src/app/core/store/user/user.facade';
import { CommonComponent } from './../../../../core/components/commonComponent';

@Component({
  selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
})
export class SigninComponent extends CommonComponent {
    signinForm: FormGroup;

    constructor(private injector: Injector, private userFacede: UserFacade) {
        super(injector);
        this.subscriptions.add(
            this.userFacede.token$
                .pipe(
                    skipWhile((jwt) => jwt === ''),
                    distinctUntilChanged(),
                )
                .subscribe(() => {
                    this.onSuccess();
                }),
        );
    }

    onSuccess() {
        this.navTo('/');
    }

    signin(req: ILoginRequest): void {
        this.userFacede.login(req);
    }
}
