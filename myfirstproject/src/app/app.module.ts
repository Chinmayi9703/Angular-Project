import { AuthorsComponent } from './authors/authors.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesService } from './courses.service';
import { AuthorsService } from './authors/authors.service';
import { FlowersComponent } from './flowers/flowers.component';
import { FlowersService } from './flowers/flowers.service';




@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    FlowersComponent
  ],
  imports: [
BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService,
    AuthorsService,
    FlowersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
