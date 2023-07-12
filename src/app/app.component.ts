import {Component} from '@angular/core';
import {Tool} from "./shared/tool";

type ViewState = 'list' | 'details';

@Component({
  selector: 'swe-root',         /* in index.html eklärt*/
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tool?: Tool;
  viewState: ViewState = 'list';

  showList() {
    this.viewState = 'list';
  }

  showDetails(tool: Tool) {
    this.tool = tool;
    this.viewState = 'details'
  }
}
