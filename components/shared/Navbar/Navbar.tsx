import Image from "next/image";
import { useState } from "react";
import logo from "../../../assets/images/Logo.png";
import useMediaQuery from "../../../custom-hooks/useMediaQuery";
import * as Styles from "./Navbar.styles";
import { Dropdown as AntDropDown } from 'antd';
import type { MenuProps } from 'antd';
import Link from "next/link";
import { useCartState } from "../../../namesapces/cart/custom-hooks/useCartState";

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link href="/collection/classic">
                Classic
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link href="/collection/jackets">
                Jackets
            </Link>
        ),
    },
    {
        key: '3',
        label: (
            <Link href="/collection/Shorts">
                Shorts
            </Link>
        ),
    },
];
export default function Navbar() {

    const matches = useMediaQuery('(max-width: 768px)')
    const [isOpen, setIsOpen] = useState(false);
    const { cartItems } = useCartState();
    return (
        <Styles.NavbarContainer >
            {!matches && (
                <Styles.LogoWrapper>
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="logo" />
                    </Link>
                </Styles.LogoWrapper>
            )}

            {!matches ? (
                <Styles.ListWrapper isActive={isOpen}>
                    <Link href="/collection/allCollection">
                        <Styles.ListItem>
                            Collections
                        </Styles.ListItem>
                    </Link>

                </Styles.ListWrapper>
            ) : (
                <Styles.ListWrapper isActive={isOpen}>
                    <AntDropDown
                        menu={{ items }}>
                        <Styles.ListItem>
                            Collections
                        </Styles.ListItem>
                    </AntDropDown>
                </Styles.ListWrapper>
            )}


            <Styles.ListWrapper isActive={false}>
                <Link
                    href="/checkout"
                >
                    <Styles.ListItem>
                        Items {cartItems.length > 0 ? cartItems.length : null}
                    </Styles.ListItem>
                </Link>
                <Styles.ListItem>
                    Profile
                </Styles.ListItem>
            </Styles.ListWrapper>
        </Styles.NavbarContainer>

    )
}
