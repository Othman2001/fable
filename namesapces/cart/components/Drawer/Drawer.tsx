import { Drawer as DrawerComponent } from "antd"
import { useState } from "react";

export default function Drawer() {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <DrawerComponent title="Basic Drawer" placement="right" onClose={onClose} open={open}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </DrawerComponent>
    )
}
