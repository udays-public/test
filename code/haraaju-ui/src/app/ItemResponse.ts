import { Item } from './Item';

export interface Embedded
{
    items: Item[]
}
export interface ItemResponse{
    _embedded: Embedded
}