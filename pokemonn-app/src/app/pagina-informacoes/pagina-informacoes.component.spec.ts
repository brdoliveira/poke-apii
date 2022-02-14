import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInformacoesComponent } from './pagina-informacoes.component';

describe('PaginaInformacoesComponent', () => {
  let component: PaginaInformacoesComponent;
  let fixture: ComponentFixture<PaginaInformacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaInformacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaInformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
