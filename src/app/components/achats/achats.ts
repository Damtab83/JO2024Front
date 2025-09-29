import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jo2024-achats',
  imports: [MatCardModule, CommonModule],
  templateUrl: './achats.html',
  styleUrl: './achats.css',
  standalone: true,
})
export class Achats {
  formulas = [
    { title: 'Billet JO 2024', description: 'Accédez aux épreuves olympiques', price: '120€' },
    { title: 'Pack VIP', description: 'Accès premium avec lounge', price: '350€' },
    { title: 'Souvenir Officiel', description: 'Articles officiels des JO', price: '25€' },
  ];
}
