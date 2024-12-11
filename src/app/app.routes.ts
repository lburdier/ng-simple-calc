import { Routes } from '@angular/router';
import { CalculetteComponent } from './calculette/calculette.component';

export const routes: Routes = [
  { path: 'calculatrice', component: CalculetteComponent }, // Route pour le composant Calculette
  { path: '', redirectTo: 'calculatrice', pathMatch: 'full' } // Redirection par défaut
];
