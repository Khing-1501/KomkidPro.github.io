import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { BlockUIModule } from 'primeng/blockui';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    SpinnerComponent, 
    TopMenuComponent
  ],
  imports: [
    CommonModule, 
    BlockUIModule,
    MenubarModule,
    InputTextModule,
    ButtonModule
  ],
  exports: [
    SpinnerComponent,
    TopMenuComponent,
  ],
  providers: [],
})
export class ComponentsModule {}
