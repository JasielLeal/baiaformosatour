import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { NavMobile } from "@/components/NavMobile";
import { WhatsButton } from "@/components/WhatsButton";
import { Outlet } from "react-router-dom";

export function LayoutPage() {
    return (
        <>
            <NavMobile/>
            <NavBar/>
            <WhatsButton />
            <Outlet/>
            <Footer />
        </>
    )
}