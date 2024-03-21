import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipeExerciseComponent } from './components/pipe-exercise/pipe-exercise.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PipeExerciseComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
