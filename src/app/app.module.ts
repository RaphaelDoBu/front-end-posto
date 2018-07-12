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
import { AddCombustivelComponent } from './component/combustivel/add-combustivel/add-combustivel.component';
import { CombustivelService } from './service/combustivel.service';
import { UserStorage } from './service/user.storage';

const appRoutes:Routes = [
  { path: "add-posto", component: AddPostoComponent},
  { path: "add-cliente", component: AddClienteComponent},
  { path: "login", component: LoginComponent},
  { path: "lista-postos", component: PostoComponent},
  { path: "lista-combustiveis/:idPosto", component: CombustivelComponent},
  { path: "add-combustivel/:idPost", component: AddCombustivelComponent}
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
    AddCombustivelComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ClienteService, PostoService, CombustivelService, AuthService,  TokenStorage,
     TokenStorage, UserStorage,
    {provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
