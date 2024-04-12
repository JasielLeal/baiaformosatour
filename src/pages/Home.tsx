import { FeedBack } from "@/components/FeedBack";
import { Hero } from "@/components/Hero";
import { Loca } from "@/components/Loca";
import { Pacotes } from "@/components/Pacotes";


import bannerv4 from '/bannerv4.png'
import iphone from '/iphone4.png'
import iphone3 from '/iphone3.png'

export function Home() {
    return (
        <>


            <Hero />
            <Pacotes />
            <FeedBack />
            <div>
                <img src={bannerv4} alt="bannerv4" className="h-[70] hidden md:block"/>
                <img src={iphone} alt="bannerv4" className="h-[70]  table:hidden"/>
                <img src={iphone3} alt="bannerv4" className="h-[70]  hidden table:block md:hidden"/>
                
            </div>
            <Loca />

        </>
    )
}