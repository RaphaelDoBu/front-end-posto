import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../model/cliente.model';
import { Router } from '@angular/router';
import { ClienteService } from '../../../service/cliente.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {
  cliente: Cliente = new Cliente();

  constructor(private router: Router, private clienteService: ClienteService) { }

  ngOnInit() {
  }

  createUser(): void {
    this.clienteService.createUser(this.cliente)
        .subscribe( data => {
          alert("User created successfully.");
        });
  };
  
}
