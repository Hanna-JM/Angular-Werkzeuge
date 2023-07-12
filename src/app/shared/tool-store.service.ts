import {Injectable, OnInit} from "@angular/core";
import {Tool} from "./tool";

@Injectable({
  providedIn: 'root'
})

export class ToolStoreService implements OnInit {
  tools: Tool[];

  constructor() {
    this.tools = [
      {
        name: ' Handkreissäge ',
        description: 'Das ist werkzeug 2 ',
        thumbnails: [{
          url: 'https://www.mobilezero.ch/pic/shop/bosch_0601623000/Bosch-Professional-Handkreissaege-GKS-190-H-003.xxl3.jpg',
          title: 'Bild von Handkreissäge'
        }],
        itemNumber: '12315',
        category: ' Maschine '
      },

      {
        name: ' Freihandfräsen ',
        description: ' Das ist werkzeug ',
        thumbnails: [{
          url: 'https://http2.mlstatic.com/D_NQ_NP_2X_947064-MLC45433778346_042021-F.jpg',
          title: 'Bild von  Freihandfräsen'
        }],
        itemNumber: '12316',
        category: ' Maschine '
      },

      {
        name: ' Winkelschleifer ',
        description: ' Das ist werkzeug ',
        thumbnails: [{
          url: 'https://images.obi.de/product/DE/150x150/491156_1.jpg',
          title: 'Bild von Winkelschleifer'
        }],
        itemNumber: '12317',
        category: ' Maschine '
      },

      {
        name: ' Rollwagen ',
        description: 'Das ist werkzeug 2 ',
        thumbnails: [{
          url: 'https://images.obi.de/product/DE/thumb/471525_1.jpg',
          title: 'Bild von Rollwagen'

        }],
        itemNumber: '12318',
        category: ' Maschine '
      }]
  }

  ngOnInit(): void {

  }

  getAll(): Tool[] {
    return this.tools;
  }

  getSingle(number: string | null): Tool | undefined {
    return this.tools.find(tool => tool.itemNumber === number)
  }

}
