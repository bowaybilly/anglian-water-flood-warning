import { Item } from "./Item";
import { Meta } from "./IMeta";

export interface IRootobject {
    context: string;
    meta: Meta;
    items: Item[];
}
