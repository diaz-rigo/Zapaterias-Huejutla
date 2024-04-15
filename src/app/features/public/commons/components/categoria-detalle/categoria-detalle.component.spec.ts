import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaDetalleComponent } from './categoria-detalle.component';

describe('CategoriaDetalleComponent', () => {
  let component: CategoriaDetalleComponent;
  let fixture: ComponentFixture<CategoriaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriaDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
