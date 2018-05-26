import { Component, OnInit } from '@angular/core';
import { ClienteService } from "../../service/cliente.service"
import { Router } from '@angular/router';
import { Cliente } from '../../model/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{
  cliente: Cliente = new Cliente();

  constructor(private router: Router, private clienteService: ClienteService) {}

  ngOnInit() {
    this.clienteService.getAll().subscribe(data => {
      this.cliente = data;
    });
  }
  

}
