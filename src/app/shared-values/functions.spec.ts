import {Functions, isStatusValid} from './functions';
import {TestBed} from '@angular/core/testing';
import {Location} from '@angular/common';

describe('Functions', () => {
  it('should validate valid status', () => {
    const allowedStates = ["active", "suspended", "inactive"];

    expect(isStatusValid("active", allowedStates)).toBe(true);
    expect(isStatusValid("suspended", allowedStates)).toBe(true);
    expect(isStatusValid("inactive", allowedStates)).toBe(true);
  });

  it('should not validate invalid status', () => {
    const allowedStates = ["active", "suspended", "inactive"];

    expect(isStatusValid("invalid", allowedStates)).toBe(false);
  });

});

describe('Functions', () => {
  let functions: Functions;

  let mockLocation: jasmine.SpyObj<Location>;

  beforeEach(() => {
    mockLocation = jasmine.createSpyObj('Location', ['back']);

    TestBed.configureTestingModule({
      providers: [
        Functions,
        {provide: Location, useValue: mockLocation}
      ]
    });

    functions = TestBed.inject(Functions);
  });


  afterEach(() => {
    localStorage.clear();
  });

  it('should create an instance', () => {
    expect(functions).toBeTruthy();
  });

  it('should return true if the user has the specified permission', () => {

    const permissions = ['admin', 'user', 'editor', 'edit_internal_user'];
    localStorage.setItem('permissions', JSON.stringify(permissions));

    expect(functions.can('admin')).toBe(true);
    expect(functions.can('user')).toBe(true);
    expect(functions.can('editor')).toBe(true);
    expect(functions.can('edit_internal_user')).toBe(true)
  });

  it('should return false if the user does not have the specified permission', () => {

    const permissions = ['user', 'editor'];
    localStorage.setItem('permissions', JSON.stringify(permissions));

    expect(functions.can('admin')).toBe(false);
    expect(functions.can('guest')).toBe(false);
    expect(functions.can('EDITOR')).toBe(false);

    expect(functions.can('add_internal_user')).toBe(false)
  });

});
