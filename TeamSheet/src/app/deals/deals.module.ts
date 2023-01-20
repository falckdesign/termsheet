import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealsListComponent } from './deals-list/deals-list.component';
import { DealCardComponent } from './deal-card/deal-card.component';



@NgModule({
  declarations: [
    DealsListComponent,
    DealCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
	DealsListComponent,
  ]
})
export class DealsModule { }
