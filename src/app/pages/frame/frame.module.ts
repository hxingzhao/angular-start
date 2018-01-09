import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FrameRoutingModule} from './frame.routes';
import {FrameComponent} from './frame.component';
import {CommonModule} from '@angular/common';
import {QRCodeModule} from 'angular2-qrcode';
import {ButtonModule, CalendarModule, CheckboxModule, DialogModule, TieredMenuModule} from 'primeng/primeng';
import {RainfullWaterlevelService} from './services/rainfull-waterlevel.service';
import {ExportDataComponent} from './components/export-data/export-data.component';
import {WaterExportComponent} from './pages/water-export/water-export.component';
import {RainExportComponent} from './pages/rain-export/rain-export.component';
import {EssenceNg2DatetimepickerModule} from "essence-ng2-datetimepicker";
import { FluxExportComponent } from './pages/flux-export/flux-export.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		FrameRoutingModule,
		EssenceNg2DatetimepickerModule,
		QRCodeModule,
		DialogModule,
		TieredMenuModule,
		ButtonModule,
		CalendarModule,
		CheckboxModule,
	],
	providers: [RainfullWaterlevelService],
	declarations: [
		FrameComponent,
		ExportDataComponent,
		WaterExportComponent,
		ExportDataComponent,
		RainExportComponent,
		FluxExportComponent
	]
})

export class FrameModule {
}
