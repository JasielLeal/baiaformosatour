import { FeedBack } from "@/components/FeedBack";
import { Hero } from "@/components/Hero";
import { Loca } from "@/components/Loca";
import { Pacotes } from "@/components/Pacotes";


import bannerv2 from '/bannerv3.png'


export function Home() {
    return (
        <>


            <Hero />
            <Pacotes />
            <FeedBack />
            <div>
                <img src={bannerv2} alt="bannerv3" className="h-[70]"/>
            </div>
            <Loca />

        </>
    )
}