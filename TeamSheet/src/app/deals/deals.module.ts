import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DealsListComponent } from './deals-list/deals-list.component';
import { DealCardComponent } from './deal-card/deal-card.component';
import { SharedModule } from '../shared/shared.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';



@NgModule({
  declarations: [
    DealsListComponent,
    DealCardComponent
  ],
  imports: [
    CommonModule,
	FormsModule,
	ReactiveFormsModule,
	SharedModule,
	CurrencyMaskModule

  ],
  exports: [
	DealsListComponent,
  ]
})
export class DealsModule { }
