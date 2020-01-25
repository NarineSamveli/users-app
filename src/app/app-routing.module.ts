import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCardComponent } from './content/user-card/user-card.component';
import { ContentComponent } from './content/content.component';
import { UserResolveService } from './user-resolve.service';

const routes: Routes = [
    { path: '', component: ContentComponent },
    { path: ':id', resolve: { user: UserResolveService }, component: UserCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
