import { Duvidas } from "@/components/Duvidas";

import { FeedBack } from "@/components/FeedBack";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Loca } from "@/components/Loca";
import { NavBar } from "@/components/NavBar";
import { NavMobile } from "@/components/NavMobile";

import { Sobre } from "@/components/Sobre";
import { WhatsButton } from "@/components/WhatsButton";


export function Home() {
    return (
        <>
            <NavMobile />
            
            <NavBar />
            <WhatsButton/>
            <Hero />
            
            <Sobre />
            <FeedBack/>
            <Duvidas/>
            <Loca/>
            <Footer/>
        </>
    )
}