import { Component, OnInit } from '@angular/core';
import { CombustivelService } from '../../service/combustivel.service';
import { Router } from '@angular/router';
import { Combustivel } from '../../model/combustivel.model';
import { ActivatedRoute } from '@angular/router';
import { UserStorage } from '../../service/user.storage';

@Component({
  selector: 'app-combustivel',
  templateUrl: './combustivel.component.html',
  styleUrls: ['./combustivel.component.css']
})
export class CombustivelComponent implements OnInit {
  combustiveis : Combustivel[];
  idPosto: number;
  usuarioLog: string;
  usuarioBuscado: string;

  constructor(private route: ActivatedRoute,private router: Router, 
    private combustivelService: CombustivelService, private userStorage: UserStorage) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.idPosto = +params['idPosto'];
       console.log(this.idPosto);
    });
    this.combustivelService.buscarPosto(this.idPosto).subscribe(data => {
      this.usuarioBuscado = data.username;
      console.log(this.usuarioBuscado)

    });
    this.combustivelService.listaCombustiveis(this.idPosto).subscribe(data => {
      this.combustiveis = data;
    });
    this.usuarioLog = this.userStorage.getUser();
    console.log(this.usuarioLog);
    this.comparacao();
  }

  comparacao() {
    return this.usuarioLog.localeCompare(this.usuarioBuscado);

  }
}
