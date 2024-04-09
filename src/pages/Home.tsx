import { FeedBack } from "@/components/FeedBack";
import { Hero } from "@/components/Hero";
import { Loca } from "@/components/Loca";
import { Pacotes } from "@/components/Pacotes";

import banner from '/bannerv3.png'
import bannerv2 from '/bannerv4.png'


export function Home() {
    return (
        <>


            <Hero />
            <Pacotes />
            <FeedBack />
            <div className="flex justify-center w-full xl:hidden">
                <img src={banner} alt="banner" className="h-[300px] w-full object-cover"/>
            </div>
            <div>
                <img src={bannerv2} alt="bannerv2"/>
            </div>
            <Loca />

        </>
    )
}