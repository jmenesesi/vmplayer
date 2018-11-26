import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmplayerComponent } from './vmplayer.component';

describe('VmplayerComponent', () => {
  let component: VmplayerComponent;
  let fixture: ComponentFixture<VmplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
