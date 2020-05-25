import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ControlComponent } from './control/control.component';
import { StatsComponent } from './stats/stats.component';
import { FrameComponent } from './frame/frame.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    StatsComponent,
    FrameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
