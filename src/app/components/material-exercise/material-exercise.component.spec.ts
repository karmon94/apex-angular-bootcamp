import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialExerciseComponent } from './material-exercise.component';

describe('MaterialExerciseComponent', () => {
  let component: MaterialExerciseComponent;
  let fixture: ComponentFixture<MaterialExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialExerciseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
