//componentes de angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importando mis componentes
import { BookSelectComponent } from './book-select/book-select.component';
import { BookListComponent } from './book-list/book-list.component';

//mis rutas
const routes: Routes = [
  { path: 'books/:id', component: BookSelectComponent},
  { path: 'books', component: BookListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'books'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
