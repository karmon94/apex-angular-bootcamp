import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasDeAtributoComponent } from './components/directivas-de-atributo/directivas-de-atributo.component';
import { DirectivasEstructuralesComponent } from './components/directivas-estructurales/directivas-estructurales.component';
import { DirectivasCustomComponent } from './components/directivas-custom/directivas-custom.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectivasDeAtributoComponent,
    DirectivasEstructuralesComponent,
    DirectivasCustomComponent,
    DataBindingComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
