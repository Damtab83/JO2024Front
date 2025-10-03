import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jo2024-custom-admin',
  imports: [CommonModule],
  templateUrl: './custom-admin.html',
  styleUrl: './custom-admin.css',
})
export class CustomAdmin {
  tickets = [
    { numero: '1', qrcode: '1erbillet' },
    { numero: '30', qrcode: '30emebillet' },
  ];
  user = { nom: 'dam', prenom: 'da', email: 'test@tesing.com', password: '123456' };
}
