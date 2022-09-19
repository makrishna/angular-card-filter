import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButterfliesComponent } from './features/butterflies/butterflies.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent,
    children: [
      { path: "", loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
