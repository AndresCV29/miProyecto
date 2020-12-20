import { Component, OnInit } from '@angular/core';
import {CatalogoService} from '../../../../services/catalogo.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.sass'],
  providers: [CatalogoService]
})
export class DescripcionComponent implements OnInit {
  pos: number;

  constructor(
    public catalogo: CatalogoService,
  ) { }

  ngOnInit(): void {

    this.pos = JSON.parse(localStorage.getItem('pos'));


  }


}
