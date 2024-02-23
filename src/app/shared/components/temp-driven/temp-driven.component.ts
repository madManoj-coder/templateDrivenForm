import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-temp-driven',
  templateUrl: './temp-driven.component.html',
  styleUrls: ['./temp-driven.component.scss']
})
export class TempDrivenComponent implements OnInit {

  contactMode = [
    {
      moc: 'email',
      id: 1
    },
    {
      moc: 'phone',
      id: 2
    },
    {
      moc: 'whatssap',
      id: 2
    },
    {
      moc: 'facebook',
      id: 2
    },
    {
      moc: 'twitter',
      id: 2
    }
  ]

  constructor() { }
  @ViewChild("signUpForm") signUpForm !: NgForm;

  ngOnInit(): void {
  }

  userInfo = {
    "userDetails": {
      "username": "manoja",
      "Email": "manoj@gmail.com"
    },
    "secretQuestion": "favouriteSinger",
    "answer": "Sonu Nigam",
    "isSubscribed": true,
    "check": "whatssap"
  }

  onSubmitBtn(eve: NgForm) {
    console.log(eve);
    console.log(eve.value);

    // if (eve.valid) {
    // console.log(eve.value);
    // }

  }

  content(eve: NgModel) {
    if (eve.hasError('required')) {
      return `this is required field`
    } else if (eve.hasError('pattern')) {
      return `incorrect pattern`
    } else if (eve.hasError('minlength')) {
      return `minimum length should be 6`
    } else if (eve.hasError('maxlength')) {
      return `maximum length should be 8`
    } else {
      return;
    }
  }

  patchVal() {
    this.signUpForm.form.patchValue(this.userInfo)
  }

}
