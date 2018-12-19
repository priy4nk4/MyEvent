import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';


import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { AddlevelComponent } from './addlevel/addlevel.component';


const appRoutes: Routes = [
  { path: '', component: ViewComponent},
  { path: 'level', component: AddlevelComponent}];


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AddlevelComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    ModalModule.forRoot()
  ],
  entryComponents: [AddlevelComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
