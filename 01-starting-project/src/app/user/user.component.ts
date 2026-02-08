import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users'; 
// ../dummy-users: two levels up as this folder is one folder level up

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  // adding a getter
  get imagePath(){
    return 'assets/users/' + this.selectedUser.avatar; // adding "this" here as we want to access the property of the class from within that same class
  }

  // event listener method
  // changing the state
  onSelectUser(){
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
} 
