import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  username: string | undefined;

  constructor(private router: Router) {
    
    const navigation = this.router.getCurrentNavigation();
    this.username = navigation?.extras.state?.['username'];
  }

  ngOnInit() {}

  changePassword() {
    console.log('Cambiar Contraseña');
  }

  logout() {
    // Navegar a la página de login
    this.router.navigate(['/login']).then(() => {
      // Limpiar los datos después de la navegación
      this.clearLoginData();
    });
  }

  clearLoginData() {
    // Aquí puedes eliminar cualquier dato persistente si fuera necesario
    this.username = '';
  }
}


