import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LevelTwoPage } from './level-two.page';

describe('LevelTwoPage', () => {
  let component: LevelTwoPage;
  let fixture: ComponentFixture<LevelTwoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
