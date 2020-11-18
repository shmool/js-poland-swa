import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginProviderComponent } from './login-provider.component';

describe('LoginProviderComponent', () => {
  let component: LoginProviderComponent;
  let fixture: ComponentFixture<LoginProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
