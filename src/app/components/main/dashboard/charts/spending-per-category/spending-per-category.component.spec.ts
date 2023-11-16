import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingPerCategoryComponent } from './spending-per-category.component';

describe('SpendingPerCategoryComponent', () => {
  let component: SpendingPerCategoryComponent;
  let fixture: ComponentFixture<SpendingPerCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpendingPerCategoryComponent]
    });
    fixture = TestBed.createComponent(SpendingPerCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
