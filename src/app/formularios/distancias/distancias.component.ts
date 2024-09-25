import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-distancias',
  templateUrl: './distancias.component.html',
  styleUrl: './distancias.component.css'
})
export class DistanciasComponent implements OnInit {
  formulario!: FormGroup;
  resultado: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      coordernaX1: new FormControl('', Validators.required),
      coordernaY1: new FormControl('', Validators.required),
      coordernaX2: new FormControl('', Validators.required),
      coordernaY2: new FormControl('', Validators.required)
    });
  }
  calcularDistancia():void{
    const coordernaX1 = this.formulario.get('coordernaX1')?.value;
    const coordernaY1 = this.formulario.get('coordernaY1')?.value;
    const coordernaX2 = this.formulario.get('coordernaX2')?.value;
    const coordernaY2 = this.formulario.get('coordernaY2')?.value;
    this.resultado = Math.sqrt(Math.pow(coordernaX2 - coordernaX1, 2) + Math.pow(coordernaY2 - coordernaY1, 2));
  }
}
