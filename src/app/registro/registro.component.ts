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

  constructor(
    
){}

  ngOnInit(): void {
    
  }

  guardar(){
    console.log(this.formularioRegistro.value);
    console.log('formulario valido',this.formularioRegistro.valid)
  }

  
}
