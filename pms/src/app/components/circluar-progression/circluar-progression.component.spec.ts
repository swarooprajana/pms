import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircluarProgressionComponent } from './circluar-progression.component';

describe('CircluarProgressionComponent', () => {
  let component: CircluarProgressionComponent;
  let fixture: ComponentFixture<CircluarProgressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CircluarProgressionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircluarProgressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
