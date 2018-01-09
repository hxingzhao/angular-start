import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {RequestService} from '../../../services/request.service';

@Injectable()
export class RainfullWaterlevelService {

	constructor(private requestService: RequestService) {
	}

	/**
	 * 获取所有站点
	 * @param type 类型
	 * @returns {Observable<any>}
	 */
	getSites(type): Observable<any> {
		return this.requestService.post('/ExportExcelController/getStationNames.do', {type: type});
	}

	/**
	 * 导出excel文件
	 * @param obj
	 * @returns {Observable<any>}
	 * */
	exportFile(obj): Observable<any> {
		return this.requestService.post('/ExportExcelController/exportExcel.do', obj)
	}
}
