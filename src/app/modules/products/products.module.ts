import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CarouselComponent } from './components/product-details/carousel/carousel.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TopRoundPipe } from './pipe/top-round.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: ':productId', component: ProductDetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [ProductsComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CarouselComponent,
    PaginationComponent,
    TopRoundPipe,
    MatCheckboxModule,
    MatInputModule,
  ],
  exports: [RouterModule],
})
export class ProductsModule {}
