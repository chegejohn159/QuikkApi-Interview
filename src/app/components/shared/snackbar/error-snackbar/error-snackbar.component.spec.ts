import { ComponentFixture, TestBed } from '@angular/core/testing';
import {SnackbarProviders} from "cypress/common/configs/providers";

import { ErrorSnackbarComponent } from './error-snackbar.component';

describe('ErrorSnackbarComponent', () => {
  let component: ErrorSnackbarComponent;
  let fixture: ComponentFixture<ErrorSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorSnackbarComponent ],
      providers: [SnackbarProviders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
