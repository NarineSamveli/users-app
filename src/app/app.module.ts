import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { UserService } from './user.service';
import { UserCardComponent } from './content/user-card/user-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { UserResolveService } from './user-resolve.service';
import { CdkTableModule } from '@angular/cdk/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    ScrollingModule,
    CdkTableModule,
    NgbModule
  ],
  exports: [
    AppComponent,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    UserService,
    UserResolveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
