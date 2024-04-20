import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaMarcaCarrucelComponent } from './categoria-marca-carrucel.component';

describe('CategoriaMarcaCarrucelComponent', () => {
  let component: CategoriaMarcaCarrucelComponent;
  let fixture: ComponentFixture<CategoriaMarcaCarrucelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriaMarcaCarrucelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriaMarcaCarrucelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
