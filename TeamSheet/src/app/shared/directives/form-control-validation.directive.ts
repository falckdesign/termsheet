import { AfterViewInit, Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[controlValidation]'
})
export class FormControlValidationDirective implements AfterViewInit {

	@Input() controlValidation!: AbstractControl<any>;

	div = this.renderer.createElement('div');
	divIn = this.renderer.createElement('div');
	constructor(
		private field: ElementRef,
		private renderer: Renderer2,

	) {

	}
	@HostListener('change', ['$event']) onChange() {
		this.divIn.innerHTML = this.renderErrors();
	}
	@HostListener('keyup', ['$event']) keyup() {
		this.divIn.innerHTML = this.renderErrors();
	}

	ngAfterViewInit() {
		this.renderer.addClass(this.field.nativeElement, 'controlValidation');
		this.renderer.addClass(this.field.nativeElement, 'form-floating');
		this.renderer.addClass(this.div, 'errorMsg-list');
		this.renderer.addClass(this.div, 'invalid-feedback');
		this.renderer.addClass(this.divIn, 'errorMsg-list-in');
		this.renderer.appendChild(this.renderer.parentNode(this.field.nativeElement), this.div);
		this.renderer.appendChild(this.div, this.divIn);
		this.divIn.innerHTML = this.renderErrors();
	}

	renderErrors() {
		let errorList: object = this.controlValidation.errors || {};
		let errorHtml: any[] = [];
		errorHtml = Object.keys(errorList).map(erro => {
			return '<span class="errorMsg">' + this.setValidationMessages(erro) + '</span>';
		});
		return errorHtml;
	}

	listErrors() {
		return this.controlValidation.errors || {};
	}

	setValidationMessages(errortype: string) {

		let errorList = this.listErrors();

		let msgs:any = {
			'default': 'Invalid field.',
			'required': 'This field is required.',
			'minlength': 'Min of ' + (errorList['minlength'] ? errorList['minlength']['requiredLength'] : '') + ' characters.',
			'maxlength': 'Max of ' + (errorList['maxlength'] ? errorList['maxlength']['requiredLength'] : '') + ' characters.',
			'email': 'Inform avalid e-mail.',
			'emailCustom': 'Inform avalid e-mail.',
			'pattern': 'Invalid value.'
		}

		if (!msgs[errortype]) {

			return this.listErrors()[errortype];
		}

		return msgs[errortype] || msgs['default'];

	};

	showValidationMessages() {
		let errors = this.listErrors();

		let messages = Object.keys(errors).map(error => {
			return this.setValidationMessages(error);
		});
		return messages;
	}

}











