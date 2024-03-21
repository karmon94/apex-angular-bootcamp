import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomCapitalizePipe } from '../../pipes/custom-capitalize.pipe';

@Component({
  selector: 'app-pipe-exercise',
  standalone: true,
  imports: [CommonModule, CustomCapitalizePipe],
  templateUrl: './pipe-exercise.component.html',
  styleUrl: './pipe-exercise.component.scss',
})
export class PipeExerciseComponent {
  money: number = 2394;
  exampleText: string = 'hello world';
}
