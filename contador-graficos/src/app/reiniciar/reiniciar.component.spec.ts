import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReiniciarComponent } from './reiniciar.component';

describe('ReiniciarComponent', () => {
  let component: ReiniciarComponent;
  let fixture: ComponentFixture<ReiniciarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReiniciarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReiniciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
