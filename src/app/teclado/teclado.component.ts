import { Component } from '@angular/core';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrl: './teclado.component.css'
})

export class TecladoComponent {
  public resultado: string = "";

  clicar(valor: string) {
    this.resultado += valor;
  }

  finalizar() {
    this.resultado = eval(this.resultado).toString();
  }

  limpar(){
    this.resultado = "";
  }

}
