import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaFortesComponent } from './pagina-fortes.component';

describe('PaginaFortesComponent', () => {
  let component: PaginaFortesComponent;
  let fixture: ComponentFixture<PaginaFortesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaFortesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaFortesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
