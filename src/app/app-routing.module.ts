import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearcherComponent } from './components/searcher/searcher.component';
import { RepositoryComponent } from './components/repository/repository.component';

const routes: Routes = [
  { path: 'repositories', component: SearcherComponent },
  { path: 'repositories/:name', component: RepositoryComponent },
  { path: '**', redirectTo: 'repositories' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
