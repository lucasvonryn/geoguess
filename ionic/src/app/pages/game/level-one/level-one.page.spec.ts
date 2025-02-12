import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LevelOnePage } from './level-one.page';

describe('LevelOnePage', () => {
  let component: LevelOnePage;
  let fixture: ComponentFixture<LevelOnePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
