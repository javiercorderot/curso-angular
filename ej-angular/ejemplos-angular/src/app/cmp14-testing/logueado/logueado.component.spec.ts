import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogueadoComponent } from './logueado.component';

describe('LogueadoComponent', () => {
  let component: LogueadoComponent;
  let fixture: ComponentFixture<LogueadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogueadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('si no estás logueado debería de aparecer la página de "Logueate"', () => {
    const dom = fixture.debugElement.nativeElement
    expect(dom.querySelector('p').textContent).toEqual('Logueate')
  })

  it('si estás logueado debería de aparecer el nombre del usuario', () => {
    component.estasLogueado = true
    fixture.detectChanges()
    const dom = fixture.debugElement.nativeElement
    expect(dom.querySelector('p').textContent).toEqual(`Bienvenido ${component.nombre}`)
  })
});
