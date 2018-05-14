import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import{HttpModule}   from '@angular/http';
import{FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClienteComponent } from './component/cliente/cliente.component';
import { PostoComponent } from './component/posto/posto.component';

import { ClienteService } from './service/cliente.service';

const appRoutes:Routes = [
  { path: "add-posto", component: PostoComponent},
  { path: "add-cliente", component: ClienteComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    PostoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
