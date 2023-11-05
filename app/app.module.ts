import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourcesInformationComponent } from './component/resources-information/resources-information.component';
import { WeekdaysComponent } from './component/weekdays/weekdays.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { SaveDeleteInformationComponent } from './component/save-delete-information/save-delete-information.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourcesInformationComponent,
    WeekdaysComponent,
    SaveDeleteInformationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ClipboardModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
