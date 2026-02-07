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
} 
