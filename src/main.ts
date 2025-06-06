import { DropMenu } from "./DropMenu"
import "./styles.scss"


new DropMenu({
    selector: "#drop-menu",
    itemSelected: {
        key: "mac",
        name: "Mac"
    },
    onChange: item => console.log(item)
})