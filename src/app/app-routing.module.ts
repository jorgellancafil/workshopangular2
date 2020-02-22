import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "history", component: HistoryComponent },
  { path: "**", component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
