import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf,NgClass],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  formularioContacto: FormGroup

constructor (private form:FormBuilder){
 this.formularioContacto = this.form.group({
   nombre:['',[Validators.required, Validators.minLength(3)]],
   email:['',[Validators.required,Validators.email]]
 })
}

hasErrors( controlName: string, errorType: string ){
  return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
}

  enviar(){
   console.log(this.formularioContacto)
  }

}
