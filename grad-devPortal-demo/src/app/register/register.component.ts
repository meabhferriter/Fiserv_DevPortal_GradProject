import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { UsersService } from '../services/user/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  options: string[] = ['Merchant', 'Acquirer'];

  constructor(private fb: FormBuilder,public  usersService: UsersService) {}

  ngOnInit(): void {
    this.buildRegistrationForm();
  }

buildRegistrationForm() {
    this.registrationForm = this.fb.group({
      username: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      merchant: new FormControl('Merchant'),
      company: new FormControl(null),
      jobTitle: new FormControl(null),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),

    });
}

  onSubmit() {
    console.log(this.registrationForm);
    if (this.registrationForm.valid) {
      this.usersService
        .postRegistration(this.registrationForm.value)
        }
  }
}
