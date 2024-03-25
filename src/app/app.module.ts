import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasCustomComponent } from './components/directivas-custom.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DirectivasCustomComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
