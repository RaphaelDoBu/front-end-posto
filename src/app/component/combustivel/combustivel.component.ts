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
  nomeDoPosto: string;

  constructor(private route: ActivatedRoute,private router: Router, 
    private combustivelService: CombustivelService, private userStorage: UserStorage) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.idPosto = +params['idPosto'];
    });
    this.combustivelService.listaCombustiveis(this.idPosto).subscribe(data => {
      this.combustiveis = data;
    });
    this.combustivelService.buscarPosto(this.idPosto).subscribe(data => {
      this.usuarioBuscado = data.username;
      this.nomeDoPosto = data.nome;
    });
    this.usuarioLog = this.userStorage.getUser();
    this.comparacao();
  }

  comparacao() {
    return this.usuarioLog.localeCompare(this.usuarioBuscado);

  }
}
