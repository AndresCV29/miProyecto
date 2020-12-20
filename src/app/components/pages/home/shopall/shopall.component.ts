import { Component, OnInit } from '@angular/core';
import {CatalogoService} from '../../../../services/catalogo.service';
import {DescripcionComponent} from '../../../shared/modal/descripcion/descripcion.component';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-shopall',
  templateUrl: './shopall.component.html',
  styleUrls: ['./shopall.component.sass'],
  providers: [CatalogoService]
})
export class ShopallComponent implements OnInit {
  pos: number;

  constructor(
    public catalogo: CatalogoService,
    public modalService: NzModalService,
  ) { }


  ngOnInit(): void {

  }

  funcion(i){
    localStorage.setItem('pos', JSON.stringify(i));
    this.pos=i;
    this.showModalDescripcion(this.pos);
  }

  showModalDescripcion(i){
    const  modal = this.modalService.create({
      nzTitle: 'Descripcion',
      nzContent: DescripcionComponent,
      nzFooter: null,
    });
  }

}
