import { FeedBack } from "@/components/FeedBack";
import { Hero } from "@/components/Hero";
import { Loca } from "@/components/Loca";
import { Pacotes } from "@/components/Pacotes";

import { WhatsButton } from "@/components/WhatsButton";


export function Home() {
    return (
        <>

            <WhatsButton />
            <Hero />
            <Pacotes/>
            <FeedBack />
            <Loca />

        </>
    )
}