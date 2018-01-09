import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {Subscription} from 'rxjs/Subscription';
import {DateTimeService} from '../../../../services/datetime.service';
import {ConfirmationService} from 'primeng/primeng';
import {RainfullWaterlevelService} from '../../services/rainfull-waterlevel.service';
import set = Reflect.set;


@Component({
	selector: 'export-data',
	templateUrl: './export-data.component.html',
	styleUrls: ['./export-data.component.scss']
})
export class ExportDataComponent implements OnInit, OnChanges {
	@Input() type: string; // 请求数据时传递type的值
	curType: string; // 当前组件的type值
	titel: string = null; // 表单title
	siteList: any[] = []; // 站点列表
	selectedValues: any[] = []; // 选中站点列表
	maxDate: Date = new Date(); // 限制最大时间
	es: any = {}; // p-calendar 时间模块 格式配置
	setTime: any = {}; // 初始化日期默认值
	options: any = {
		format: 'YYYY-MM-DD',
		viewMode: 'days'
	};
	yearMax: any = '1990:' + (new Date()).getFullYear();
	preValue: string = (new Date()).getDate() + '';
	isload: boolean = false;
	constructor(private dateTimeService: DateTimeService,
				private confirmationService: ConfirmationService,
				private rainfullWaterlevelService: RainfullWaterlevelService) {
	}

	ngOnInit() {
		const time = (new Date).getTime() - 3600000;  // 获取当前时间前一个小时
		this.setTime = {
			startTime: new Date(time),
			endTime: new Date()
		};
		this.getSites();
		this.es = this.dateTimeService.locale;
	}

	ngOnChanges(change: SimpleChanges) {
		if (change.type.currentValue) {
			this.curType = change.type.currentValue;
			this.titel = change.type.currentValue + '数据导出';
		}
	}

	/**
	 * 导出按钮事件  导出xlsx文件，后台返回的是文件url地址
	 * */
	onExport() {
		const startTime = this.dateTimeService.dateFormat(this.setTime.startTime, 'yyyy-MM-dd'); // 起始时间number
		const endTime = this.dateTimeService.dateFormat(this.setTime.endTime, 'yyyy-MM-dd'); // 终止时间number
		const obj = {
			type: this.curType,
			startTime: this.setTime.startTime.getTime(),
			endTime: this.setTime.endTime.getTime()
		};
		this.confirmationService.confirm({
			header: '系统提示',
			message: `确定导出 【${startTime}】到【${endTime}】的数据吗？`,
			acceptVisible: true,
			rejectVisible: true,
			accept: () => { // 确认事件回调函数
				this.isload = true;
				this.rainfullWaterlevelService.exportFile(obj).subscribe((serverDate) => {
					this.isload = false;
					window.open(environment.domain + '/' + serverDate); // 跳转地址下载文件
				});
			},
			reject: () => { // 取消事件回调函数
			}
		});
	}

	/**
	 * 获取所有站点数据 后台接口没有按规范写，接口只返回一组数组。
	 * */
	getSites() {
		const sub: Subscription = this.rainfullWaterlevelService.getSites(this.curType).subscribe((serverData: string[]) => {
			sub.unsubscribe();
			for (let i = 0; i < serverData.length; i++) {
				this.selectedValues.push(i); // 默认选中checkbox
				const obj = {
					name: serverData[i],
					value: i,
				};
				this.siteList.push(obj);
			}
		});
	}
}
