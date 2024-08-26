import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username!: string;
  password!: string;
  message!: string;
  
  constructor(private router: Router, private alertController: AlertController) {}

  async validateLogin() {
    if (!this.username || !this.password) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debes escribir en ambos campos.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    if (
      (this.username === 'admin' && this.password === 'admin') || 
      (this.username === 'root' && this.password === 'root')
    ) {
      const navigationExtras: NavigationExtras = {
        state: { username: this.username }
      };
      this.router.navigate(['/home'], navigationExtras);
    } else {
      this.message = 'Login erroneo';
    }
  }

  clearFields() {
    this.username = '';
    this.password = '';
  }
  
  ngOnInit() {
    this.clearFields();
  }
}
