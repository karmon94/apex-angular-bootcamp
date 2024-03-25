import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeExerciseComponent } from './pipe-exercise.component';

describe('PipeExerciseComponent', () => {
  let component: PipeExerciseComponent;
  let fixture: ComponentFixture<PipeExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeExerciseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipeExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
