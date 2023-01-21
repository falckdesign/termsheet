import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlValidationDirective } from './directives/form-control-validation.directive';



@NgModule({
  declarations: [
    FormControlValidationDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
	FormControlValidationDirective
  ]
})
export class SharedModule { }
