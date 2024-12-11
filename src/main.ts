import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// Bootstrap de l'application principale avec la configuration des routes
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)], // Fournit les routes configurées pour l'application
}).catch(err => console.error('Erreur lors du bootstrap de l\'application:', err));
