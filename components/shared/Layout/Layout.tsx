import Navbar from "../Navbar/Navbar";

interface ILayoutProps {
    children: React.ReactNode;
}


export default function Layout({ children }: ILayoutProps) {
    return (
        <div
            style={{
                marginLeft: "55px",
                marginRight: "30px"
            }}
        >
            <Navbar />
            {children}
        </div>

    )
}
