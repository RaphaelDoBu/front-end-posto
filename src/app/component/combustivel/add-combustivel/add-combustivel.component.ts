import { Component, OnInit } from '@angular/core';
import { Combustivel } from '../../../model/combustivel.model';
import { CombustivelService } from '../../../service/combustivel.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-combustivel',
  templateUrl: './add-combustivel.component.html',
  styleUrls: ['./add-combustivel.component.css']
})
export class AddCombustivelComponent implements OnInit {
  combustivel: Combustivel = new Combustivel();
  idPosto : number;
  nomeDoPosto: string;

  constructor(private route: ActivatedRoute,private router: Router, 
    private combustivelService: CombustivelService, ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idPosto = +params['idPost'];
    });
    this.combustivelService.buscarPosto(this.idPosto).subscribe(data => {
      this.nomeDoPosto = data.nome;
    });
  }

  createCombustivelPosto(): void {
    this.combustivelService.createCombustivelPosto(this.idPosto, this.combustivel)
        .subscribe( data => {
          alert("Combustivel criado com sucesso.");
        });
    this.router.navigate(['lista-combustiveis/'+this.idPosto]);
  };
}
