import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export interface ClientPrincipal {
  userDetails: string;
}
export interface AppUser {
  clientPrincipal: null | ClientPrincipal;
}

export interface User {
  pending?: boolean;
  username?: string;
}

const pendingUser = {
  pending: true
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$: BehaviorSubject<User> = new BehaviorSubject(pendingUser);

  constructor(private http: HttpClient) {
    this.user$.subscribe(console.log)
    this.http.get<AppUser>('.auth/me').subscribe(user => {
        this.user$.next(user.clientPrincipal ?
          {
            ...user.clientPrincipal,
            username: user.clientPrincipal.userDetails.split('@')[0]
          } :
          null);
      }
      , err => {
        this.user$.next(null);
      });
  }
}
