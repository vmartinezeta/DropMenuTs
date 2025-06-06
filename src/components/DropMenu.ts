import { IDropMenu } from "@/IDropMenu"
import { IDropMenuProps } from "@interfaces/IDropMenuProps"
import { TDropItem } from "@interfaces/TDropItem"


export class DropMenu implements IDropMenu {
    container: HTMLDivElement | null
    menuButton: HTMLButtonElement | null | undefined
    items: HTMLDivElement | null | undefined
    opciones: TDropItem[] = []
    itemSelected: TDropItem
    abierto: boolean = false
    onChange: (item: TDropItem) => void

    constructor({selector, itemSelected, onChange}:IDropMenuProps) {
        this.itemSelected = itemSelected
        this.onChange = onChange
        this.container = document.querySelector<HTMLDivElement>(selector)
        if (!this.container) throw new TypeError("falta el root DOM")
        this.menuButton = this.container.querySelector<HTMLButtonElement>("button")
        if (!this.menuButton) return
        this.items = this.container.querySelector<HTMLDivElement>("[data-items]")
        if (!this.items) return
        const buttons = this.items.querySelectorAll<HTMLButtonElement>("button")
        for(const b of buttons){
            this.opciones.push({key:b.value, name:b.textContent || "N/D"})
        }

        const opcion = this.opciones.find(opcion=>opcion.key === this.itemSelected.key)
        if (!opcion) return
        this.menuButton.textContent = this.itemSelected.name
        this.container.addEventListener("click", this.toggle.bind(this))

        for (const boton of buttons) {
            boton.addEventListener("click", this.cambiarItem.bind(this))
        }
        const button = [...buttons].find(b => b.value ===itemSelected.key)
        if (!button) return
        button.classList.add("drop__btn--active")
    }

    resetButtons() {
        if (!this.items) return
        for(const b of this.items.querySelectorAll("button")) {
            b.classList.remove("drop__btn--active")
        }
    }

    cambiarItem(event: Event) {
        const button = event.target as HTMLButtonElement
        this.resetButtons()
        button.classList.add("drop__btn--active")
        const item = this.opciones.find(e => e.key === button.value)
        if (!item) return
        this.itemSelected = item
        this.onChange(item)
        if (!this.menuButton) return
        this.menuButton.textContent = item.name
    }

    toggle() {
        if (!this.container || !this.items || !this.menuButton) return
        this.abierto = !this.abierto
        this.items.classList.remove("drop__items--expanding")
        this.menuButton.classList.remove("drop__btn__home--active")
        if (!this.abierto) return
        this.abrir()
    }

    abrir() {
        if (!this.items || !this.menuButton) return
        this.items.classList.toggle("drop__items--expanding")
        this.menuButton.classList.add("drop__btn__home--active")
    }
}