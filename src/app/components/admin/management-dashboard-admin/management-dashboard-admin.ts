import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'jo2024-management-dashboard-admin',
  imports: [CommonModule, RouterModule],
  templateUrl: './management-dashboard-admin.html',
  styleUrl: './management-dashboard-admin.css',
  standalone: true,
})
export class ManagementDashboardAdmin {
  users = [
    {
      id: 3,
      lastname: 'dam',
      firstname: 'da',
      email: 'test@tesing.com',
      tickets: [
        { numero: '1', qrcode: '1erbillet' },
        { numero: '30', qrcode: '30emebillet' },
      ],
    },
    {
      id: 10,
      lastname: 'tab',
      firstname: 'ca',
      email: 'testing@testing.com',
      tickets: [
        { numero: '50', qrcode: '50emebillet' },
        { numero: '400', qrcode: '400emebillet' },
      ],
    },
  ];
}
