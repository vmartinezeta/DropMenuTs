import { TDropItem } from "@interfaces/TDropItem"

export interface IDropMenu{
    container: HTMLDivElement | null
    menuButton:HTMLButtonElement | null | undefined
    items: HTMLDivElement | null | undefined
    itemSelected: TDropItem
    opciones: TDropItem[]
    abierto: boolean
    onChange: (item:TDropItem) => void
    cambiarItem: (event: Event) => void
    toggle: () => void
    abrir:() => void
    resetButtons: () => void
}