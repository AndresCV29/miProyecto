import { Component, OnInit } from '@angular/core';
import {CatalogoService} from '../../../../services/catalogo.service';
import {NzModalService} from 'ng-zorro-antd';
import {AgregarComponent} from '../../../shared/modal/agregar/agregar.component';
import {Agregar} from '../../../../model/agregar';
import {Actualizar} from '../../../../model/actualizar';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.sass']
})
export class CatalogoComponent implements OnInit {

  agregar: Agregar = {
    nombre_proyecto: null,
    titulo: null,
    precio: null,
    marca: null,
    descripcion: null,
    destacado: null,
    imagen: null,
  }

  actualizar: Actualizar ={
    product_id: null,
  }

  constructor(

    public catalogoService: CatalogoService,
    public modalService: NzModalService,

  ) { }

  ngOnInit(): void {


  }

  getAll(){
    this.catalogoService.getAll().subscribe((data) => {


      console.log('getAll sirviendo');
      console.log(data);
      this.catalogoService.catalogo2 = data;
      this.catalogoService.catalogo2 = this.catalogoService.catalogo2.data;
      //this.catalogoService.catalogo2 = Array.of(this.catalogoService.catalogo2);
      console.log('mostrando catalogo');
      console.log(this.catalogoService.catalogo2);
      // console.log(this.catalogoService.catalogo2['data']);

    }, error => {

      console.log('error getAll sirviendo');
      console.log(error);

    });
  }

  // create(){
  //   this.catalogoService.create().subscribe((data) => {
  //
  //     console.log('create sirviendo');
  //     console.log(data);
  //
  //   }, error => {
  //
  //     console.log('error create sirviendo');
  //     console.log(error);
  //
  //   });
  // }

  update(){
    this.catalogoService.update().subscribe((data) => {

      console.log(data);

    }, error => {

      console.log(error);

    });
  }

  disable(){
    this.catalogoService.disable().subscribe((data) => {

      console.log(data);

    }, error => {

      console.log(error);

    });
  }

  enable(){
    this.catalogoService.enable().subscribe((data) => {

      console.log(data);

    }, error => {

      console.log(error);

    });
  }

  getOne(actualizar){
    this.catalogoService.getOne(actualizar).subscribe((data) => {

      console.log('getOne sirviendo');
      console.log(data);

    }, error => {

      console.log('error getOne sirviendo');
      console.log(error);

    });
  }

  showModalAgregar(){
    const  modal = this.modalService.create({
      nzTitle: 'Registrar Producto',
      nzContent: AgregarComponent,
      nzFooter: null,
    });
  }


}
