import Image from "next/image";
import logo from "../../assets/images/Logo.png";
import foto from "../../assets/images/Foto.png";
import * as Styles from "./Hero.styles";

export default function Hero() {
    return (
        <Styles.Container>
            <Styles.LogoWrapper>
                <Image
                    src={logo}
                    alt="logo"
                />
            </Styles.LogoWrapper>
            <Styles.Title>
                Moscow clothing brand that doesn't limit itself to the framework of any concepts
            </Styles.Title>
            <Styles.ImageWrapper>
                <Image
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                    src={foto}
                    alt="foot"
                />
            </Styles.ImageWrapper>
        </Styles.Container>
    )
}
