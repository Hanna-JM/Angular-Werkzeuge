import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {Tool} from "../shared/tool";
import {ToolStoreService} from "../shared/tool-store.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector:'swe-tool-details',
  templateUrl:'./tool-details.component.html',
  styleUrls:['./tool-details.component.css']

})
export class ToolDetailsComponent implements OnInit {
 /* @Input() tool?: Tool;
  @Output() showListEvent = new EventEmitter<any>;*/
tool?: Tool;
constructor(private ts:ToolStoreService,
            private route:ActivatedRoute) {
}
  ngOnInit(): void {
  const params= this.route.snapshot.paramMap;
  this.tool=this.ts.getSingle(params.get('itemNumber'));
  }
 /* showToolList(){
    this.showListEvent.emit();
  }*/
}
