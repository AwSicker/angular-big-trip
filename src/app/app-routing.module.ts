import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {StatsComponent} from "./components/stats/stats.component";
import {TableGuard} from "./table.guard";

const routes: Routes = [
  {
    path: "", component: MainComponent,
  },
  {
    path: "stats", component: StatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
