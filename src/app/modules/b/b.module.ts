import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';
import { B3Component } from './b3/b3.component';
import { RouterModule, Routes } from '@angular/router';
import { ZModule } from '../z/z.module';

const routes: Routes = [
  { path: 'b1', component: B1Component },
  { path: 'b2', component: B2Component },
  { path: 'b3', component: B3Component },
  { path: '', redirectTo: 'b1', pathMatch: 'full' },
];

@NgModule({
  declarations: [B1Component, B2Component, B3Component],
  imports: [CommonModule, RouterModule.forChild(routes), ZModule],
})
export class BModule {}
