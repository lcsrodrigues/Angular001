import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { PanelComponent } from './panel/panel.component';
import { TentativasComponent } from './tentativas/tentativas.component';
import { ProgressoComponent } from './progresso/progresso.component';

@NgModule({
  declarations: [AppComponent, TopoComponent, PanelComponent, TentativasComponent, ProgressoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
