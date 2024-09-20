import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  imageWidth: number = 50;
  imageMargin: number = 2;
  muestraImagen: boolean = false;
  mostrarImagenes(): void {
    this.muestraImagen = !this.muestraImagen;
  }
  productos: any[] = [
    {
      "ProductoID": 1,
      "Modelo": "Sentra",
      "Descripcion": "2 Puertas",
      "Year": "Febrero 2 2020",
      "Precio": 20000,
      "Color": "Azul",
      "Marca": "Nissan",
      "ImageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3IK446XE3VI4OgV-d3JAmAcqVYRn_YXSxiQ&s"
    },
    {
      "ProductoID": 2,
      "Modelo": "A4",
      "Descripcion": "4 Puertas",
      "Year": "Febrero 2 2020",
      "Precio": 20000,
      "Color": "Rojo",
      "Marca": "Audi",
      "ImageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3IK446XE3VI4OgV-d3JAmAcqVYRn_YXSxiQ&s"
    },
    {
      "ProductoID": 3,
      "Modelo": "March",
      "Descripcion": "4 Puertas",
      "Year": "Febrero 2 2020",
      "Precio": 20000,
      "Color": "Blanco",
      "Marca": "Nissan",
      "ImageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3IK446XE3VI4OgV-d3JAmAcqVYRn_YXSxiQ&s"
    },
    {
      "ProductoID": 4,
      "Modelo": "Kicks",
      "Descripcion": "4 Puertas",
      "Year": "Febrero 2 2020",
      "Precio": 20000,
      "Color": "Gris",
      "Marca": "Nissan",
      "ImageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3IK446XE3VI4OgV-d3JAmAcqVYRn_YXSxiQ&s"
    }
  ];
}
