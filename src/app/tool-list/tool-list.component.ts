import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {Tool} from "../shared/tool";
import {ToolStoreService} from "../shared/tool-store.service";

@Component({
  selector: 'swe-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit {
  tools!: Tool[];  /* ! pflicht*/
  @Output() showDetailsEvent = new EventEmitter<Tool>();

  constructor(private tss: ToolStoreService) { //holen data from store service
  } // private dependency injection : not from where it comes but where to use

  ngOnInit(): void {       // muss
    this.tools = this.tss.getAll();

    /*this.tools=[{
     name:'Winckelschleifer',
     description:'Das ist ein tolles Werkzeug!',
     thumbnails:[{
       url:'https://ng-buch.de/angular-cover.jpg',
       title: 'Das ist ein Vorschaubild'
     }],
     category:'Schleifmachine',
     itemNumber:'3'
   },
   {
     name:'Stemmhammer',
     description:'Geht ab der Gerät',
     thumbnails:[{
       url:'https://ng-buch.de/angular-cover.jpg',
       title: 'Das ist ein Vorschaubild'
     }],
     category:'Bohrmachine',
     itemNumber:'6'
  }]*/
  }

  showDetails(tool: Tool) {
    this.showDetailsEvent.emit(tool);
  }

}


