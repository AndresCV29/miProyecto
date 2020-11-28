import { Component, OnInit } from '@angular/core';
import {NzTabPosition} from 'ng-zorro-antd';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Contacto} from '../../../../model/contacto';

class NzFormTooltipIcon {
}

@Component({
  selector: 'app-events',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass'],
  providers: [Contacto]
})
export class ContactoComponent implements OnInit {

  validateForm!: FormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  submitForm(value: {email: String; nickname: String; phoneNumber: String; codigo: String; comment: String}): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    console.log(value);
    localStorage.setItem('formulario_local', JSON.stringify(value));
    sessionStorage.setItem('formulario_session', JSON.stringify(value));
    this.contacto.correo= value.email;
    this.contacto.nombre = value.nickname;
    this.contacto.tel = value.phoneNumber;
    this.contacto.codigo = value.codigo;
    this.contacto.mensaje = value.comment;
    console.log('Imprime contacto');
    console.log(this.contacto);
    console.log('Imprime session storage');
    console.log(sessionStorage.getItem('formulario_session'));

  }

  constructor(private fb: FormBuilder, private contacto: Contacto) {

  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      nickname: [null, [Validators.required]],
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [Validators.required]],
      comment: ['', [Validators.required]]

    });
  }

}

