import { NgModule } from '@angular/core';
import { AdminComponent } from './pages/admin/admin.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'admin/blogs', component: AdminComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: '', pathMatch: 'full', redirectTo: 'admin/blogs'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
