import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGameComponent } from './details-game.component';

describe('DetailsGameComponent', () => {
  let component: DetailsGameComponent;
  let fixture: ComponentFixture<DetailsGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsGameComponent]
    });
    fixture = TestBed.createComponent(DetailsGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
