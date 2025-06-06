import { DropMenu } from "@components/DropMenu"
import { TDropItem } from "@interfaces/TDropItem"
import "./styles.scss"


new DropMenu({
    selector: "#drop-menu",
    itemSelected: {
        key: "mac",
        name: "Mac"
    },
    onChange: (item:TDropItem) => console.log(item)
})