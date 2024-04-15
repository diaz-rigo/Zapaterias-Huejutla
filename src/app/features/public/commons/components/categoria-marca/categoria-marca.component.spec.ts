import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaMarcaComponent } from './categoria-marca.component';

describe('CategoriaMarcaComponent', () => {
  let component: CategoriaMarcaComponent;
  let fixture: ComponentFixture<CategoriaMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriaMarcaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriaMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
