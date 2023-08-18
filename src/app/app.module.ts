import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KnobComponent } from './Components/Knob/Knob.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, KnobComponent,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
