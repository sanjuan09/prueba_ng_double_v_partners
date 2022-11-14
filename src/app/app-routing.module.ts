import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './components/chart/chart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { ScoreGuard } from './guards/score.guard';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'perfil/:login', component: ProfileComponent, canActivate: [ScoreGuard], data: {score: 150} },
  { path: 'chart', component: ChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
