import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-composant-selecteur',
  templateUrl: './composant-selecteur.component.html',
  styleUrls: ['./composant-selecteur.component.css']
})
export class ComposantSelecteurComponent {
  constructor(public router: Router) {
  }
}
