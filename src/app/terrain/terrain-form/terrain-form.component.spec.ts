import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainFormComponent } from './terrain-form.component';

describe('TerrainFormComponent', () => {
  let component: TerrainFormComponent;
  let fixture: ComponentFixture<TerrainFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrainFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
