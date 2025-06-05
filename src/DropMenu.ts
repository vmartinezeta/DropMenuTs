export class DropMenu {
    private container: HTMLDivElement | null
    private menuButton: HTMLButtonElement | null | undefined
    private items: HTMLDivElement | null | undefined
    private itemSelected: TDropItem
    private opciones : TDropItem[]   
    private abierto: boolean = false

    constructor(selector: string, opciones: TDropItem[], itemSelected:TDropItem) {
        this.opciones = opciones
        this.itemSelected = itemSelected
        this.container = document.querySelector<HTMLDivElement>(selector)
        if (!this.container) throw new TypeError("falta el root DOM")
        this.menuButton = this.container.querySelector<HTMLButtonElement>("button")
        if (!this.menuButton) return
        this.items = this.container.querySelector<HTMLDivElement>("[data-items]")
        if (!this.items) return
        const opcion = this.opciones.find(opcion => opcion.key = this.itemSelected.key)
        if (!opcion) return
        this.menuButton.textContent = opcion.name
        this.container.addEventListener("click", this.toggle.bind(this))
        
        for (const boton of this.items.querySelectorAll<HTMLButtonElement>("button")) {
            boton.addEventListener("click", this.cambiarItem.bind(this))
        }
    }

    cambiarItem(event:Event) {
        const button = event.target as HTMLButtonElement
        const item = this.opciones.find(e => e.key === button.value)
        if (!item) return
        this.itemSelected = item
        if (!this.menuButton) return
        this.menuButton.textContent = item.name
    }

    toggle() {
        if (!this.container || !this.items || !this.menuButton) return
        this.abierto = !this.abierto
        this.items.classList.remove("drop__items--expanding")
        if (!this.abierto) return
        this.abrir()
    }

    abrir() {
        if (!this.items || !this.menuButton) return
        this.items.classList.add("drop__items--expanding")
    }
}


export type TDropItem = {
    key: string
    name: string
}