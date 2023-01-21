import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DealsListComponent } from './deals-list/deals-list.component';
import { DealCardComponent } from './deal-card/deal-card.component';



@NgModule({
  declarations: [
    DealsListComponent,
    DealCardComponent
  ],
  imports: [
    CommonModule,
	FormsModule,
	ReactiveFormsModule
  ],
  exports: [
	DealsListComponent,
  ]
})
export class DealsModule { }
