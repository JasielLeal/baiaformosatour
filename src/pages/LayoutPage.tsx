import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { NavMobile } from "@/components/NavMobile";
import { Outlet } from "react-router-dom";

export function LayoutPage() {
    return (
        <>
            <NavMobile/>
            <NavBar/>
            <Outlet/>
            <Footer />
        </>
    )
}