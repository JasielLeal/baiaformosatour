import { FeedBack } from "@/components/FeedBack";
import { Hero } from "@/components/Hero";
import { Loca } from "@/components/Loca";
import { Pacotes } from "@/components/Pacotes";




export function Home() {
    return (
        <>

            
            <Hero />
            <Pacotes/>
            <FeedBack />
            <Loca />

        </>
    )
}