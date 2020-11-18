import { Component, OnInit } from '@angular/core';
import { LikeService } from '../like.service';

const initialLikeColor = 'white';
const colors = [
  'red',
  'springgreen',
  'gold',
  'mediumslateblue',
  'crimson',
  'salmon',
  'dodgerblue',
  'limegreen',
  'cyan',
  'deepskyblue',
  'seagreen',
  'blueviolet'];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  likes$;
  heartStyle = { color: initialLikeColor };
  currentColor = -1;

  constructor(private likeService: LikeService) {
  }

  ngOnInit(): void {
    this.likes$ = this.likeService.likes$;
  }

  like(): void {
    this.heartStyle = { color: colors[(++this.currentColor) % colors.length] };
    this.likeService.like();
  }

}
