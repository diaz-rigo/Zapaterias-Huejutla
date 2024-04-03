import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillProductComponent } from './detaill-product.component';

describe('DetaillProductComponent', () => {
  let component: DetaillProductComponent;
  let fixture: ComponentFixture<DetaillProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetaillProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetaillProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
