import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial values of 0', () => {
    expect(component.numero1).toBe(0);
    expect(component.numero2).toBe(0);
    expect(component.resultado).toBe(0);
  });

  it('should display initial values of 0 in HTML', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="number"]:nth-child(1)').value).toBe('0');
    expect(compiled.querySelector('input[type="number"]:nth-child(3)').value).toBe('0');
    expect(compiled.querySelector('h3').textContent).toContain('Resultado: 0');
  });
});