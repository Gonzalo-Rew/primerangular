import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar-binding',
  standalone: false,
  styleUrl: './tabla-multiplicar-binding.css',
  templateUrl: './tabla-multiplicar-binding.html',
})
export class TablaMultiplicarBinding {
  public items!: Array<number>;
  public numero: number = 0;
  public numeroIntroducido: number = 0;

  generarTabla(): void {
    this.items = [];
    this.numero = this.numeroIntroducido;
    for (let i = 1; i <= 10; i++) {
      this.items.push(this.numero * i);
    }
  }
}
