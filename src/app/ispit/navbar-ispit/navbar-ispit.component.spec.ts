import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarIspitComponent } from './navbar-ispit.component';

describe('NavbarIspitComponent', () => {
  let component: NavbarIspitComponent;
  let fixture: ComponentFixture<NavbarIspitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarIspitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarIspitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
