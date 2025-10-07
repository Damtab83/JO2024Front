import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jo2024-management-dashboard-admin-custom',
  imports: [CommonModule],
  templateUrl: './management-dashboard-admin-custom.html',
  styleUrl: './management-dashboard-admin-custom.css',
  standalone: true,
})
export class ManagementDashboardAdminCustom {
  private route = inject(ActivatedRoute);
  user: any = null;

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

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const id = Number(params['id']);
      this.user = this.users.find((u) => u.id === id) || null;
    });
  }
}
