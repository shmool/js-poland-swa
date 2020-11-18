import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user$;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.user$ = this.userService.user$;
  }

}
