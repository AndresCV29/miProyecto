import { Component, OnInit } from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
import {DescripcionComponent} from '../../../shared/modal/descripcion/descripcion.component';
import {CatalogoService} from '../../../../services/catalogo.service';
@Component({
  selector: 'app-xiaomi',
  templateUrl: './xiaomi.component.html',
  styleUrls: ['./xiaomi.component.sass'],
  providers: [CatalogoService]
})
export class XiaomiComponent implements OnInit {
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
