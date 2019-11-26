import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-data-driven-form',
  templateUrl: './data-driven-form.component.html',
  styleUrls: ['./data-driven-form.component.scss']
})
export class DataDrivenFormComponent implements OnInit {
public frmUser: FormGroup;
  constructor(private _formBuider: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.frmUser = this._formBuider.group({
      username: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]],
      password: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern('^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$')
      ]],
    });
    this.frmUser.valueChanges.subscribe(data => {
      console.log(data);
    });
  }
  onsubmitForm() {
    console.log(this.frmUser);
  }
  onResetForm() {
    this.frmUser.reset();
  }

}
