import { FeedBack } from "@/components/FeedBack";
import { Hero } from "@/components/Hero";
import { Loca } from "@/components/Loca";
import { Pacotes } from "@/components/Pacotes";


import bannerv4 from '/bannerv4.png'


export function Home() {
    return (
        <>


            <Hero />
            <Pacotes />
            <FeedBack />
            <div>
                <img src={bannerv4} alt="bannerv4" className="h-[70]"/>
            </div>
            <Loca />

        </>
    )
}