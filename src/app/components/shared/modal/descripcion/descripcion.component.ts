import { Component, OnInit } from '@angular/core';
import {CelularesService} from '../../../../services/celulares';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.sass'],
  providers: [CelularesService]
})
export class DescripcionComponent implements OnInit {
  pos: number;

  constructor(
    public celulares: CelularesService,
  ) { }

  ngOnInit(): void {

    this.pos = JSON.parse(localStorage.getItem('pos'));


  }


}
