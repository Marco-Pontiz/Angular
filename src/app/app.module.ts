import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { RoundedBlockDirective } from './directives/rounded-block.directive';
import { DraggableDirective } from './directives/draggable.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainWrapperComponent,
    RoundedBlockDirective,
    DraggableDirective
  ], //AppComponent pertenece a AppModule
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
