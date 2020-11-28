import {Component, OnInit} from '@angular/core';
import {CelularesService} from '../../../../services/celulares';
import {DescripcionComponent} from '../../../shared/modal/descripcion/descripcion.component';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.sass'],
  providers: [CelularesService]
})
export class ClientComponent implements OnInit {

  pos: number;

  constructor(
    public celulares: CelularesService,
    public modalService: NzModalService,

  ) { }



  disabled = false;
  array = [
    'banner 2.jpg',
    'banner.png',
    'REDMI NOTE 9 PRO SERIES.jpg',
    'REDMI NOTE 9 SERIES.jpg',
    'REDMI NOTE 8 PRO SERIES2.jpg',
    'REDMI NOTE 8 SERIES.jpg',
    'GALAXY A71 SERIES.jpg',
    'GALAXY A70 SERIES.jpg',
    'GALAXY A51 SERIES.jpg',
    'GALAXY M31 SERIES.jpg',

  ];

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

