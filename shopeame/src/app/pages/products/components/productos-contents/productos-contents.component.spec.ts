import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosContentsComponent } from './productos-contents.component';

describe('ProductosContentsComponent', () => {
  let component: ProductosContentsComponent;
  let fixture: ComponentFixture<ProductosContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
