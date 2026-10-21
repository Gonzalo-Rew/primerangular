import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar-ref',
  standalone: false,
  styleUrl: './tabla-multiplicar-ref.css',
  templateUrl: './tabla-multiplicar-ref.html',
})
export class TablaMultiplicarRef {
  public items!: Array<number>;
  @ViewChild('numero') numeroInput!: ElementRef;
  public numeroIntroducido: number = 0;

  generarTabla(): void {
    let numero = Number(this.numeroInput.nativeElement.value);
    this.items = [];
    this.numeroIntroducido = numero;
    for (let i = 1; i <= 10; i++) {
      this.items.push(numero * i);
    }
  }

}
