import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ToolListComponent} from "./tool-list/tool-list.component";
import {ToolDetailsComponent} from "./tool-details/tool-details.component";
import * as http from "http";
import * as https from "https";
import {HomeComponent} from "./home/home.component";
/*https://localhost:4200/tools/12345
//https://localhost:4200/contact/1234*/

//https://localhost:4200/
/*
const routes: Routes = [
  {
    path:'tools',
    component: ToolListComponent
  },
  {
    path:'tools/:number',
    component: ToolDetailsComponent
  }/*,
  {
    path:'orders/tools/:orderNumber',
    component: ToolDetailsComponent
  }*/
//];
const routes:Routes =[

  {path:''
    ,redirectTo:'/home',
    pathMatch:'full'},
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'tools',
    component: ToolListComponent
  },
  {
    path:'tools/:itemNumber',
    component: ToolDetailsComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
