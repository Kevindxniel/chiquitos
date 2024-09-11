import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorraComponent } from './gorra.component';

describe('GorraComponent', () => {
  let component: GorraComponent;
  let fixture: ComponentFixture<GorraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GorraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GorraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
