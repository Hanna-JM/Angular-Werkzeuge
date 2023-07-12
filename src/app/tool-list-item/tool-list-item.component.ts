import {Component, Input, OnInit} from "@angular/core";
import {Tool} from "../shared/tool";

@Component({
  selector:'swe-tool-list-item',
  templateUrl:'./tool-list-item.component.html',
  styleUrls:['./tool-list-item.component.css']
})

export class ToolListItemComponent implements OnInit{
  @Input() tool?:Tool;
  ngOnInit() {
  }

}
