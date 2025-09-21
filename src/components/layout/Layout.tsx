import React from "react";
import Navbar from "../Header";
import Footer from "../Footer";
interface ILayout {
    children: React.ReactNode
}

function Layout({ children }: ILayout) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
export default Layout;