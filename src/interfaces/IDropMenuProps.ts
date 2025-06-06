import { TDropItem } from "./TDropItem"

export interface IDropMenuProps{
    selector:string
    itemSelected:TDropItem
    onChange: (item: TDropItem) => void
}

