import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public getRoutes() {
    return routes.map(r => r.path !== '' && r.path !== '**');
  }

  public getRoute(route: string) {
    if (route === '' || route === 'home') {
      return 'home';
    }
    const found = routes.find(r => r.path === route);
    return found ? route : 'page-not-found';
  }
}
