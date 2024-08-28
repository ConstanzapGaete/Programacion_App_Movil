import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username!: string;
  password!: string;
  
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
      const alert = await this.alertController.create({
        header: 'Error de Login',
        message: 'Usuario o contraseña incorrectos.',
        buttons: ['OK']
      });
      await alert.present();
      this.username = '';
      this.password = '';
    }
  }

  ngOnInit() {
    Keyboard.addListener('keyboardWillShow', (info) => {
      document.querySelector('ion-content')?.setAttribute('style', `padding-bottom: ${info.keyboardHeight}px`);
    });

    Keyboard.addListener('keyboardWillHide', () => {
      document.querySelector('ion-content')?.setAttribute('style', 'padding-bottom: 0px');
    });
  }

  adjustForKeyboard(show: boolean) {
    if (show) {
      document.querySelector('ion-content')?.setAttribute('style', 'padding-bottom: 250px');
    } else {
      document.querySelector('ion-content')?.setAttribute('style', 'padding-bottom: 0px');
    }
  }
}
