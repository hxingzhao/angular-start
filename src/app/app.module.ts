import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { AuthGuard } from './services/auth-guard.service';
import { EDatePipe } from './pipes/eDate.pipe';
import { ETimePipe } from './pipes/eTime.pipe';
import { RequestService } from './services/request.service';
import { DateTimeService } from './services/datetime.service';
import { FilePathService } from './services/filepath.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogModule, ConfirmationService, GrowlModule } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';
import { EventsService } from './services/events.service';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		ConfirmDialogModule,
		GrowlModule
	],
	declarations: [
		AppComponent,
		EDatePipe,
		ETimePipe,
	],
	providers: [
		AuthGuard,
		RequestService,
		EventsService,
		DateTimeService,
		FilePathService,
		ConfirmationService,
		MessageService
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
