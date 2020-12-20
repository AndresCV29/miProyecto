import { Component, OnInit } from '@angular/core';

import {Agregar} from '../../../../model/agregar';
import {NzModalRef} from 'ng-zorro-antd';
import {CatalogoService} from '../../../../services/catalogo.service';
import {Actualizar} from '../../../../model/actualizar';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.sass']
})
export class AgregarComponent implements OnInit {

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

    private modal: NzModalRef,
    public catalogoService: CatalogoService,

  ) { }

  ngOnInit(): void {
  }

  cancelar()
  {
    this.modal.destroy();
  }

  enviarDatos(){
    console.log('Datos enviados')
    console.log(this.agregar );
    localStorage.setItem('userL',JSON.stringify(this.agregar));
    this.create(this.agregar);
  }

  create(agregar){
    this.catalogoService.create(agregar).subscribe((data) => {

      console.log('create sirviendo');
      console.log(data);

    }, error => {

      console.log('error create sirviendo');
      console.log(error);

    });
  }


}
