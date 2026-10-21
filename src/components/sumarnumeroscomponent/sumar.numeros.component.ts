import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sumar-numeros',
  standalone: false,
  templateUrl: './sumar.numeros.component.html',
})
export class SumarNumerosComponent {
  public resultado: number = 0;
  @ViewChild('numero1') numero1Input!: ElementRef;
  @ViewChild('numero2') numero2Input!: ElementRef;


  sumarNumeros(): void {
    let numero1 = parseFloat(this.numero1Input.nativeElement.value);
    let numero2 = parseFloat(this.numero2Input.nativeElement.value);
    this.resultado = numero1 + numero2;
  }
}
