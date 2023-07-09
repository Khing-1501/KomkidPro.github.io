import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from './spinner/spinner.component';

import { BlockUIModule } from 'primeng/blockui';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, BlockUIModule],
  exports: [SpinnerComponent],
  providers: [],
})
export class ComponentsModule {}
