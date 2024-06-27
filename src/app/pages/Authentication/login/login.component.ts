import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, ButtonModule],
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}
  handleSubmit() {
    alert(
      this.profileForm.value.email + ' | ' + this.profileForm.value.password
    );
  }
}
