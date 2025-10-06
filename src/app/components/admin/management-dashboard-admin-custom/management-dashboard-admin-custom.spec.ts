import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementDashboardAdminCustom } from './management-dashboard-admin-custom';

describe('ManagementDashboardAdminCustom', () => {
  let component: ManagementDashboardAdminCustom;
  let fixture: ComponentFixture<ManagementDashboardAdminCustom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementDashboardAdminCustom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementDashboardAdminCustom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
