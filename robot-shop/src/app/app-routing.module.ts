import { NgModule } from '@angular/core';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'practice', component: PracticeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // default view on rendering application
  { path: '**', pathMatch: 'full', component: HomeComponent }, // wildcardroute
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
