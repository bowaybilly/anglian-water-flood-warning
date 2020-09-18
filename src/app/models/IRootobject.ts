import { Item } from "./Item";
import { Meta } from "./Meta";

export interface IRootobject {
    context: string;
    meta: Meta;
    items: Item[];
}
