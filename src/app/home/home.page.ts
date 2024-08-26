
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string | undefined;

  constructor(private router: Router) {
    this.username = this.router.getCurrentNavigation()?.extras.state?.['username'];
  }

  ngOnInit() {}

  iralperfil() {
    this.router.navigate(['/profile'], {
      state: { username: this.username }
    });
  }
  
}
