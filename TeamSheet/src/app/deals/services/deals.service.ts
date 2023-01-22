import { Injectable } from '@angular/core';
import { Deal } from '../models/deal.model';

@Injectable({
	providedIn: 'root'
})
export class DealsService {
	storedDeals:Deal[] = [
		{
			DEAL_NAME: 'Sweet Mall Deal',
			ADRESS: 'Some Street 321, Chicago, IL',
			PURCHASE_PRICE: 1000000,
			NOI: 105000
		},
		{
			DEAL_NAME: 'Some other Real Estate Deal',
			ADRESS: 'Anywhere Av. 456, Chicago, IL',
			PURCHASE_PRICE: 1000000,
			NOI: 110000
		},
		{
			DEAL_NAME: 'Cedar Square Residence',
			ADRESS: 'Cedar Street 789, Chicago, IL',
			PURCHASE_PRICE: 1000000,
			NOI: 108000
		},
		{
			DEAL_NAME: 'Compact Family Condo',
			ADRESS: 'Happy Family St 963, Chicago, IL',
			PURCHASE_PRICE: 1000000,
			NOI: 120000
		}
	];

	constructor() { }

	getDeals(): Deal[] {
		let DealsList: Deal[] = [...this.storedDeals];
		return DealsList;
	}

	async addDeal(deal:Deal):Promise<any> {
		const data = await (this.storedDeals.unshift(deal));
		return data;
	}
}
