import { Component, Input, OnInit } from '@angular/core';
import { Deal } from '../models/deal.model';

@Component({
	selector: 'app-deal-card',
	templateUrl: './deal-card.component.html',
	styleUrls: ['./deal-card.component.less']
})
export class DealCardComponent implements OnInit {
	@Input() deal!:Deal;

	constructor() { }

	ngOnInit(): void {
	}

}
