import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-material-exercise',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './material-exercise.component.html',
  styleUrl: './material-exercise.component.scss',
})
export class MaterialExerciseComponent {
  nombre: string = '';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogExampleComponent, {
      data: { name: this.nombre },
    });

    dialogRef.afterClosed().subscribe((response) => {
      this.nombre = response;
    });
  }
}
