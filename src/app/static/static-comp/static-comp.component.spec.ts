import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticCompComponent } from './static-comp.component';

describe('StaticCompComponent', () => {
  let component: StaticCompComponent;
  let fixture: ComponentFixture<StaticCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
