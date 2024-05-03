import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaUsuarioComponent } from './tabla-usuario.component';

describe('TablaUsuarioComponent', () => {
  let component: TablaUsuarioComponent;
  let fixture: ComponentFixture<TablaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
