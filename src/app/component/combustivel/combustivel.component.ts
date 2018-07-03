import { Component, OnInit } from '@angular/core';
import { CombustivelService } from '../../service/combustivel.service';
import { Router } from '@angular/router';
import { Combustivel } from '../../model/combustivel.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-combustivel',
  templateUrl: './combustivel.component.html',
  styleUrls: ['./combustivel.component.css']
})
export class CombustivelComponent implements OnInit {
  combustiveis : Combustivel[];
  idPosto: number;

  constructor(private route: ActivatedRoute,private router: Router, private combustivelService: CombustivelService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.idPosto = +params['idPosto'];
       console.log(this.idPosto);
    });
  
    this.combustivelService.listaCombustiveis(this.idPosto).subscribe(data => {
      this.combustiveis = data;
    });
  }

  // listaCombustiveis() {
  //   this.combustivelService.listaCombustiveis(this.idPosto).subscribe(data => {
  //     this.combustiveis = data;
  //   });
  // }
}
