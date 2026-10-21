import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HooksComponent } from '../components/hookscomponent/hooks.component';
import { DeportesComponent } from '../components/deportescomponent/deporte.component';
import { FormsModule } from '@angular/forms';
import { FormsBindingComponent } from '../components/forms.binding.component/forms.binding.component';
import { SumarNumerosComponent } from '../components/sumarnumeroscomponent/sumar.numeros.component';
import { TestComponent } from '../components/test-component/test-component';
import { TablaMultiplicarRef } from '../components/tabla-multiplicar-ref/tabla-multiplicar-ref';
import { TablaMultiplicarBinding } from '../components/tabla-multiplicar-binding/tabla-multiplicar-binding';

@NgModule({
  declarations: [
    App,
    PrimerComponent,
    HooksComponent,
    DeportesComponent,
    FormsBindingComponent,
    SumarNumerosComponent,
    TestComponent,
    TablaMultiplicarRef,
    TablaMultiplicarBinding
  ],
  imports: [BrowserModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
