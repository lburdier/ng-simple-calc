import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculette',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Ajout de CommonModule
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.css']
})
export class CalculetteComponent {
  // Déclaration correcte du formulaire
  form = new FormGroup({
    operande1: new FormControl<number | null>(0, [Validators.required, Validators.min(0)]),
    operande2: new FormControl<number | null>(0, [Validators.required, Validators.min(0)]),
    operateur: new FormControl<string | null>('+', [Validators.required])
  });

  resultat: number | string = 0;

  // Méthode pour effectuer le calcul
  calcul(): void {
    if (this.form.valid) {
      const val1 = this.form.get('operande1')?.value ?? 0;
      const val2 = this.form.get('operande2')?.value ?? 0;
      const op = this.form.get('operateur')?.value;

      switch (op) {
        case '+':
          this.resultat = val1 + val2;
          break;
        case '-':
          this.resultat = val1 - val2;
          break;
        case '*':
          this.resultat = val1 * val2;
          break;
        case '/':
          this.resultat = val2 !== 0 ? val1 / val2 : 'Erreur : Division par zéro';
          break;
        default:
          this.resultat = 'Erreur : Opérateur invalide';
          break;
      }
    } else {
      this.resultat = 'Erreur : Formulaire invalide';
    }
  }

  // Méthode pour vérifier si un champ est invalide et touché
  hasError(controlName: string): boolean {
    const control = this.form.get(controlName);
    return control?.invalid && control?.touched ? true : false;
  }
}
