import { FeedBack } from "@/components/FeedBack";
import { Hero } from "@/components/Hero";
import { Loca } from "@/components/Loca";

import { WhatsButton } from "@/components/WhatsButton";


export function Home() {
    return (
        <>

            <WhatsButton />
            <Hero />
            <FeedBack />
            <Loca />

        </>
    )
}