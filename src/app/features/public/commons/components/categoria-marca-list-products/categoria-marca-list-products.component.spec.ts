import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaMarcaListProductsComponent } from './categoria-marca-list-products.component';

describe('CategoriaMarcaListProductsComponent', () => {
  let component: CategoriaMarcaListProductsComponent;
  let fixture: ComponentFixture<CategoriaMarcaListProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriaMarcaListProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriaMarcaListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
