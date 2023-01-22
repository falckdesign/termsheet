import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Alert, AlertType } from 'src/app/shared/models/alert.model';
import { Deal } from '../models/deal.model';
import { DealsService } from '../services/deals.service';

@Component({
	selector: 'app-deals-list',
	templateUrl: './deals-list.component.html',
	styleUrls: ['./deals-list.component.less']
})
export class DealsListComponent implements OnInit {

	public dealsList:BehaviorSubject<Deal[]> = new BehaviorSubject<Deal[]>([]);
	public showForm:boolean = false;
	public formNewDeal:FormGroup;
	public alertList:Alert[] = [];

	constructor(
		private formBuilder: FormBuilder,
		private dealsService: DealsService,
	) {
		this.formNewDeal = this.formBuilder.group({
			name: ['', [Validators.required, Validators.maxLength(300)]],
			address: ['', [Validators.required, Validators.maxLength(300)]],
			purchase_price: [null, [Validators.required, Validators.maxLength(12)]],
			noi: [null, [Validators.required, Validators.maxLength(12)]],
		});
	}

	ngOnInit(): void {
		this.dealsList.next(this.dealsService.getDeals());
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
		this.dealsService.addDeal(Deal).then(()=>{
			this.dealsList.next(this.dealsService.getDeals());
			const successAlert:Alert = { TYPE:AlertType.success, TEXT:"Deal added successfully!" }
			this.alertList.unshift(successAlert);
		});
	}

	hideAlert(alert:Alert):void{
		this.alertList = this.alertList.filter((_alert)=>{
			return _alert !== alert;
		});
	}

	//#endregion
}
