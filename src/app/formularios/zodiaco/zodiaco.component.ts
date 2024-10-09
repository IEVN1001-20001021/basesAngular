import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent {
  formulario!: FormGroup;
  name: string = '';
  edad: string = '';
  signoChino: string = '';
  signoIMG: string = '';
  imageWidth: number = 250;

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellidoPaterno: new FormControl('', Validators.required),
      apellidoMaterno: new FormControl('', Validators.required),
      dia: new FormControl('', Validators.required),
      mes: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required),
      masculino: new FormControl('', Validators.required),
      femenino: new FormControl('', Validators.required)
    });
  }
  calcularZodiacChino(): void {
    const nombre = this.formulario.get('nombre')?.value;
    const aPaterno = this.formulario.get('apellidoPaterno')?.value;
    const aMaterno = this.formulario.get('apellidoMaterno')?.value;
    const mes = this.formulario.get('mes')?.value;
    const year = this.formulario.get('year')?.value;
    this.name = "Hola tu nombre es: " + nombre + " " + aPaterno + " " + aMaterno;
    if(mes < 10){
      this.edad = "Tu edad es: " + (2024 - year);
    }else if(mes > 10){
      this.edad = "Tu edad es: " + (2023 - year);
    }
    function zodiacChino(year: number) {
      const signos = ['Mono', 'Gallo', 'Perro', 'Cerdo', 'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra'];
      return signos[year % 12];
    }
    this.signoChino = "Tu signo chino es: " + zodiacChino(year);
    switch (zodiacChino(year)) {
      case 'Mono':
        this.signoIMG = 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Mono-768x657-1.jpg';
        break;
      case 'Gallo':
        this.signoIMG = 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Gallo-768x657-1.jpg';
        break;
      case 'Perro':
        this.signoIMG = 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Perro-768x657-1.jpg';
        break;
      case 'Cerdo':
        this.signoIMG = 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Cerdo-768x657-1.jpg';
        break;
      case 'Rata':
        this.signoIMG = 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Rata-768x657-1.jpg';
        break;
      case 'Buey':
        this.signoIMG = 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Buey-768x657-1.jpg';
        break;
      case 'Tigre':
        this.signoIMG = 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Tigre-768x657-1.jpg';
        break;
      case 'Conejo':
        this.signoIMG = 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Conejo-768x657-1.jpg';
        break;
      case 'Dragón':
        this.signoIMG = 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Dragon-768x657-1.jpg';
        break;
      case 'Serpiente':
        this.signoIMG = 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Serpiente-768x657-1.jpg';
        break;
      case 'Caballo':
        this.signoIMG = 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Caballo-768x657-1.jpg';
        break;
      case 'Cabra':
        this.signoIMG = 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Cabra-768x657-1.jpg';
        break;
    }
  }
}
