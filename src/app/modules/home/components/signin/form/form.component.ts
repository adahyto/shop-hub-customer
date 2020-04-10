import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ILoginRequest } from 'src/app/core/models/auth';

@Component({
    selector: 'app-signin-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class SigninFormComponent implements OnInit {
    signinForm: FormGroup;
    @Output() formValue = new EventEmitter<ILoginRequest>();

    ngOnInit(): void {
        this.signinForm = new FormGroup({
            username: new FormControl(''),
            password: new FormControl(''),
        });
    }

    onSubmit(): void {
        this.formValue.emit({
            user: {
                username: this.signinForm.value.username,
                password: this.signinForm.value.password,
            },
        });
    }
}
