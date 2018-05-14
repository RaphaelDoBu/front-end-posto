import { Component, OnInit } from '@angular/core';
import { ClienteService } from "../../service/cliente.service"

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: Array<any>;

  constructor(public clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getAll().subscribe(data => {
      this.cliente = data;
    });
  }

}
