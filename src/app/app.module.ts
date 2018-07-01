import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import{HttpModule}   from '@angular/http';
import{FormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClienteComponent } from './component/cliente/cliente.component';
import { PostoComponent } from './component/posto/posto.component';

import { ClienteService } from './service/cliente.service';
import { LoginComponent } from './component/login/login.component';
import { AddClienteComponent } from './component/cliente/add-cliente/add-cliente.component';
import { AddPostoComponent } from './component/posto/add-posto/add-posto.component';
import { PostoService } from './service/posto.service';
import { AuthService } from './service/auth.service';
import {TokenStorage} from './service/token.storage';
import { Interceptor } from './service/interceptor';
import { CombustivelComponent } from './component/combustivel/combustivel.component';

const appRoutes:Routes = [
  { path: "add-posto", component: AddPostoComponent},
  { path: "add-cliente", component: AddClienteComponent},
  { path: "login", component: LoginComponent},
  { path: "lista-clientes", component: ClienteComponent},
  { path: "lista-postos", component: PostoComponent},
  { path: "add-combustivel", component: CombustivelComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    PostoComponent,
    LoginComponent,
    AddClienteComponent,
    AddPostoComponent,
    CombustivelComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ClienteService, PostoService, AuthService,  TokenStorage, TokenStorage,
    {provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
