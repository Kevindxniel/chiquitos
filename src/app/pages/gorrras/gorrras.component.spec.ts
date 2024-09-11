import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorrrasComponent } from './gorrras.component';

describe('GorrrasComponent', () => {
  let component: GorrrasComponent;
  let fixture: ComponentFixture<GorrrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GorrrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GorrrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
