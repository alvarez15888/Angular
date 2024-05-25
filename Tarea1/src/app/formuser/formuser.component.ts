import { Component, OnInit  } from '@angular/core';

interface User {
  firstName: string;
  lastName: string;
  phone: string;
  birthdate: string;
}

@Component({
  selector: 'app-formuser',
  templateUrl: './formuser.component.html',
  styleUrls: ['./formuser.component.scss']
})
export class FormuserComponent {
  users: User[] = [];

  model: User = {
    firstName: '',
    lastName: '',
    phone: '',
    birthdate: ''
  };

  onSubmit() {
    this.users.push({ ...this.model });
    this.model = {
      firstName: '',
      lastName: '',
      phone: '',
      birthdate: ''
    };
  }
}
