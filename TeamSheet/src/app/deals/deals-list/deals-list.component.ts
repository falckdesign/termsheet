import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Deal } from '../models/deal.model';

@Component({
	selector: 'app-deals-list',
	templateUrl: './deals-list.component.html',
	styleUrls: ['./deals-list.component.less']
})
export class DealsListComponent implements OnInit {

	public dealsList:BehaviorSubject<Deal[]> = new BehaviorSubject<Deal[]>([]);
	public showForm:boolean = false;
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
		this.dealsList.next(this.getDeals());
	}
	//#rewgion EVENTS
	OnClickAddDeal(){
		this.showForm = true;
	}
	OnClickSaveNewDeal():void{
		//console.log("this.formNewDeal: ", this.formNewDeal);
		if (this.formNewDeal.invalid) {
			return;
		} else {
			this.addDeal();
			this.closeModal();
		}
	}
	//#endregion

	//#region FUNCTIONS
	closeModal():void{
		this.formNewDeal.reset();
		this.showForm = false;
	}

	addDeal():void{
		const Deal:Deal = {
			DEAL_NAME: this.formNewDeal.get('name')?.value,
			ADRESS: this.formNewDeal.get('address')?.value,
			PURCHASE_PRICE: this.formNewDeal.get('purchase_price')?.value,
			NOI: this.formNewDeal.get('noi')?.value
		};
		const currentDealsList = this.dealsList.getValue();
		currentDealsList.unshift(Deal);
		this.dealsList.next(currentDealsList);
		alert("Deal added successfully!");
	}

	getDeals():Deal[] {
		let DealsList:Deal[] = [
			{
				DEAL_NAME:'Sweet Mall Deal',
				ADRESS:'Some Street 321, Chicago, IL',
				PURCHASE_PRICE:1000000,
				NOI:105000
			},
			{
				DEAL_NAME:'Some other Real Estate Deal',
				ADRESS:'Anywhere Av. 456, Chicago, IL',
				PURCHASE_PRICE:1000000,
				NOI:110000
			},
			{
				DEAL_NAME:'Cedar Square Residence',
				ADRESS:'Cedar Street 789, Chicago, IL',
				PURCHASE_PRICE:1000000,
				NOI:108000
			},
			{
				DEAL_NAME:'Compact Family Condo',
				ADRESS:'Happy Family St 963, Chicago, IL',
				PURCHASE_PRICE:1000000,
				NOI:120000
			}
		];

		return DealsList;
	}
	//#endregion
}
