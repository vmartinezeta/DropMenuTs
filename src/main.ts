import { DropMenu, TDropItem } from "./DropMenu"
import "./styles.scss"

const itemDefault = {key:"windows", name:"Windows"}
const opciones: TDropItem[] = [
    itemDefault, 
    {key:"mac", name:"Mac"},
    {key:"linux", name:"Linux"}
]

new DropMenu("#drop-menu", opciones, itemDefault)