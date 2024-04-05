import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { NavMobile } from "@/components/NavMobile";

export function Home(){
    return(
        <>
        <NavMobile/>
        <NavBar/>
        <Hero/>
        </>
    )
}