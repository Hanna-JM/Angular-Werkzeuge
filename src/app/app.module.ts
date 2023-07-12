import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToolListComponent} from "./tool-list/tool-list.component";
import {ToolListItemComponent} from "./tool-list-item/tool-list-item.component";
import {ToolDetailsComponent} from "./tool-details/tool-details.component";
import {RouterModule, Routes} from "@angular/router";
import { WerkzeugComponent } from './werkzeug/werkzeug.component';
import { HomeComponent } from './home/home.component';
import { FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ToolListComponent,
    ToolListItemComponent,
    ToolDetailsComponent,
    WerkzeugComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
