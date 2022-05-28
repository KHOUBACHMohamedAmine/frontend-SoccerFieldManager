import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainEditComponent } from './terrain-edit.component';

describe('TerrainEditComponent', () => {
  let component: TerrainEditComponent;
  let fixture: ComponentFixture<TerrainEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrainEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
