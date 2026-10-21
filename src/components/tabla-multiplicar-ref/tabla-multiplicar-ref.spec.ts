import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaMultiplicarRef } from './tabla-multiplicar-ref';

describe('TablaMultiplicarRef', () => {
  let component: TablaMultiplicarRef;
  let fixture: ComponentFixture<TablaMultiplicarRef>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaMultiplicarRef],
    }).compileComponents();

    fixture = TestBed.createComponent(TablaMultiplicarRef);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
