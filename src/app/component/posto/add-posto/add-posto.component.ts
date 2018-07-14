import { Component, OnInit } from '@angular/core';
import { Posto } from '../../../model/posto.model';
import { PostoService } from '../../../service/posto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-posto',
  templateUrl: './add-posto.component.html',
  styleUrls: ['./add-posto.component.css']
})
export class AddPostoComponent implements OnInit {
  posto: Posto = new Posto();

  constructor(private router: Router, private postoService: PostoService) { }

  ngOnInit() {
  }

  createPosto(): void {
    this.postoService.createPosto(this.posto)
        .subscribe( data => {
          this.posto = new Posto();
          alert("Posto criado com sucesso.");
          this.router.navigate(['login']);
        });

  };

}
