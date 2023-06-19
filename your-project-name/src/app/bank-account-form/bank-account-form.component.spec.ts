import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountFormComponent } from './bank-account-form.component';

describe('BankAccountFormComponent', () => {
  let component: BankAccountFormComponent;
  let fixture: ComponentFixture<BankAccountFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankAccountFormComponent]
    });
    fixture = TestBed.createComponent(BankAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
