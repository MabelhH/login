import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  implements OnInit {
  formularioRegistro= new FormGroup({
    usuario:new FormControl('angular',[Validators.required]),
    password:new FormControl('123456',[Validators.required])

  }); 
  validacion=false;
  isSubmit=false

  ngOnInit() { }

  guardar(){
    this.isSubmit=true
    const usuario=this.formularioRegistro.controls['usuario'].value
    const password=this.formularioRegistro.controls['password'].value
    
    if(usuario=='angular'&& password=='123456'){
    return this.validacion=true;
    }else{
      return this.validacion=false;
    }


  }

  
}
