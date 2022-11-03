import Navbar from "../Navbar/Navbar";

interface ILayoutProps {
    children: React.ReactNode;
}


export default function Layout({ children }: ILayoutProps) {
    return (
        <div
            style={{
                marginLeft: "60px",
                marginRight: "60px"
            }}
        >
            <Navbar />
            {children}
        </div>

    )
}
