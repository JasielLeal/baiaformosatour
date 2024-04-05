import { FeedBack } from "@/components/FeedBack";
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
          
        </>
    )
}