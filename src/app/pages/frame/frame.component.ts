import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MenuItem } from 'primeng/primeng';

@Component({
	templateUrl: './frame.component.html',
	styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {
	title: string = environment.title;
	items: MenuItem[];
	date7: Date;

	constructor() {
	}

	ngOnInit() {

	}
}
