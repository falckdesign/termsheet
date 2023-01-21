import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Deal } from '../models/deal.model';

@Component({
	selector: 'app-deals-list',
	templateUrl: './deals-list.component.html',
	styleUrls: ['./deals-list.component.less']
})
export class DealsListComponent implements OnInit {

	dealsList:Deal[] = [];
	showForm:boolean = false;
	public formNewDeal:FormGroup;

	constructor(
		private formBuilder: FormBuilder,
	) {
		this.formNewDeal = this.formBuilder.group({
			name: ['', [Validators.required, Validators.maxLength(300)]],
			address: ['', [Validators.required, Validators.maxLength(300)]],
			purchase_price: [null, [Validators.required, Validators.maxLength(12)]],
			noi: [null, [Validators.required, Validators.maxLength(12)]],
		});
	}

	ngOnInit(): void {
		this.dealsList = this.getDeals();
	}
	//#rewgion EVENTS
	OnClickAddDeal(){
		this.showForm = true;
	}
	OnClickSaveNewDeal(){
		console.log("this.formNewDeal.conrols: ", this.formNewDeal.controls)
		if (this.formNewDeal.invalid) {

			alert("Campos inválidos");
			return;

		} else {
			alert("Formulário OK!");
			this.closeModal();
		}
	}
	//#endregion

	//#region FUNCTIONS
	closeModal(){
		this.showForm = false;
	}

	getDeals():Deal[] {
		let DealsList:Deal[] = [
			{
				DEAL_NAME:'Sweet Mall Deal',
				ADRESS:'Some Street 321, Chicago, IL',
				PURCHASE_PRICE:1000000,
				NOI:900000
			},
			{
				DEAL_NAME:'Some other Real Estate Deal',
				ADRESS:'Anywhere Av. 456, Chicago, IL',
				PURCHASE_PRICE:1000000,
				NOI:900000
			},
			{
				DEAL_NAME:'Cedar Square Residence',
				ADRESS:'Cedar Street 789, Chicago, IL',
				PURCHASE_PRICE:1000000,
				NOI:900000
			},
			{
				DEAL_NAME:'Compact Family Condo',
				ADRESS:'Happy Family St 963, Chicago, IL',
				PURCHASE_PRICE:1000000,
				NOI:900000
			}
		];

		return DealsList;
	}
	//#endregion
}
