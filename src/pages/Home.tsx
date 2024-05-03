import { FeedBack } from "@/components/FeedBack";
import { Loca } from "@/components/Loca";
import { Pacotes } from "@/components/Pacotes";

import bannerv4 from '/bannerv4.png'
import iphone from '/iphone5.png'
import iphone3 from '/iphone5.png'
import { Carrosel } from "@/components/carrossel";

export function Home() {
    return (
        <>


            <Carrosel />
            <Pacotes />
            <FeedBack />
            <div>
                <img src={bannerv4} alt="bannerv4" className="h-[70] hidden md:block" />
                <img src={iphone} alt="bannerv4" className="h-[70]  table:hidden cover" />
                <img src={iphone3} alt="bannerv4" className="h-[70]  hidden table:block md:hidden w-full cover" />
            </div>
            <Loca />

        </>
    )
}