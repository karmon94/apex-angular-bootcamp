import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AModule } from './modules/a/a.module';
import { BModule } from './modules/b/b.module';
import { ZModule } from './modules/z/z.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AModule, BModule, ZModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
