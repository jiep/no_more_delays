import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelaysComponent } from './delays.component';

describe('DelaysComponent', () => {
  let component: DelaysComponent;
  let fixture: ComponentFixture<DelaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
