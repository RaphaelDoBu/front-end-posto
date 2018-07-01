import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostoService } from '../../service/posto.service';
import { Posto } from '../../model/posto.model';

@Component({
  selector: 'app-posto',
  templateUrl: './posto.component.html',
  styleUrls: ['./posto.component.css']
})
export class PostoComponent implements OnInit {
  postos: Posto[];

  constructor(private router: Router, private postoService: PostoService) { }

  ngOnInit() {
    this.postoService.getAll().subscribe(data => {
      this.postos = data;
    });
  }

  

}
