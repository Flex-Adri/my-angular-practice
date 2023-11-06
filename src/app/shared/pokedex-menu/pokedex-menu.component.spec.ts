import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexMenuComponent } from './pokedex-menu.component';

describe('PokedexMenuComponent', () => {
  let component: PokedexMenuComponent;
  let fixture: ComponentFixture<PokedexMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokedexMenuComponent]
    });
    fixture = TestBed.createComponent(PokedexMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
