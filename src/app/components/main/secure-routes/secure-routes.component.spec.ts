import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureRoutesComponent } from './secure-routes.component';

describe('SecureRoutesComponent', () => {
  let component: SecureRoutesComponent;
  let fixture: ComponentFixture<SecureRoutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecureRoutesComponent]
    });
    fixture = TestBed.createComponent(SecureRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
