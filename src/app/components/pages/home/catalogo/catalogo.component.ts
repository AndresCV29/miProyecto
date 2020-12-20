import { Component, OnInit } from '@angular/core';
import {CatalogoService} from '../../../../services/catalogo.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.sass']
})
export class CatalogoComponent implements OnInit {

  constructor(

    public catalogo: CatalogoService,
    public catalogoService: CatalogoService,

  ) { }

  ngOnInit(): void {

  }




}
