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
import { LoginComponent } from './component/login/login.component';
import { AddClienteComponent } from './component/cliente/add-cliente/add-cliente.component';
import { AddPostoComponent } from './component/posto/add-posto/add-posto.component';
import { PostoService } from './service/posto.service';

const appRoutes:Routes = [
  { path: "add-posto", component: AddPostoComponent},
  { path: "add-cliente", component: AddClienteComponent},
  { path: "login", component: LoginComponent},
  { path: "lista-clientes", component: ClienteComponent},
  { path: "lista-postos", component: PostoComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    PostoComponent,
    LoginComponent,
    AddClienteComponent,
    AddPostoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ClienteService, PostoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
