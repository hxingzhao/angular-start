import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrameComponent } from './frame.component';
import { WaterExportComponent } from './pages/water-export/water-export.component';
import { RainExportComponent } from './pages/rain-export/rain-export.component';
import { FluxExportComponent } from "./pages/flux-export/flux-export.component";

const frameRoutes: Routes = [
	{
		path: '',
		component: FrameComponent,
		children: [
			{
				path: 'rainfall',
				component: RainExportComponent,
			},
			{
				path: 'water',
				component: WaterExportComponent,
			},
			{
				path: 'flux',
				component: FluxExportComponent,
			},
			{
				path: '',
				redirectTo: 'rainfall',
				pathMatch: 'full'
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(frameRoutes)
	],
	exports: [
		RouterModule
	]
})

export class FrameRoutingModule {
}
