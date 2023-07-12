import {Thumbnail} from "./thumbnail";

export interface Tool{
  name:string,
  description?: string,
  thumbnails: Thumbnail[],
  category: string,
  itemNumber: string
}
