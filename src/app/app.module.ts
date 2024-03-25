import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialExerciseComponent } from './components/material-exercise/material-exercise.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MaterialExerciseComponent],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
