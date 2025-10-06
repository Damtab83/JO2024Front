import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementDashboardAdmin } from './management-dashboard-admin';

describe('ManagementDashboardAdmin', () => {
  let component: ManagementDashboardAdmin;
  let fixture: ComponentFixture<ManagementDashboardAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementDashboardAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementDashboardAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
