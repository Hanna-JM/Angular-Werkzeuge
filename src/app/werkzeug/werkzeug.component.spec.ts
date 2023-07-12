import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WerkzeugComponent } from './werkzeug.component';

describe('LoginComponent', () => {
  let component: WerkzeugComponent;
  let fixture: ComponentFixture<WerkzeugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WerkzeugComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WerkzeugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
