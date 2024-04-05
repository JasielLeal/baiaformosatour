import { Duvidas } from "@/components/Duvidas";
import { FeedBack } from "@/components/FeedBack";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { NavMobile } from "@/components/NavMobile";
import { Sobre } from "@/components/Sobre";


export function Home() {
    return (
        <>
            <NavMobile />
            <NavBar />
            <Hero />
            <Sobre />
            <FeedBack/>
            <Duvidas/>
            <Footer/>
        </>
    )
}