

import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export function Hero() {
    
    useEffect(()=>{
        AOS.init()
    },[])
    
    return (
        <div id="home">
            <div className="w-full h-screen bg-[url('/bgphonev2.webp')] lg:bg-[url('/site.webp')] bg-cover pt-52 flex px-5 pb-10 bg-center justify-center">
                <div className="max-w-[1100px]">
                    <div className="">
                        <Badge variant="default" className="mb-2 lg:text-base">Empresa especializa em turismo</Badge>
                        <h1 className="uppercase text-white font-bold text-4xl lg:text-6xl" data-aos="fade-down" data-aos-duration="1000">Vem viver essa<br />experiência de maneira<br />única!</h1>
                        <p className="font-normal text-white lg:text-xl sm:max-w-[740px]" data-aos="fade-up" data-aos-duration="1000">Aproveite o melhor da natureza, da aventura e da liberdade em um passeio imperdível, onde as paisagens se tornam seus caminhos.</p>
                        <div className="mt-4 flex gap-2" >
                            <Button variant='default' asChild data-aos="fade-right" data-aos-duration="1000">
                                <Link to='https://api.whatsapp.com/send?phone=5584994511101&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20passeio%20de%20Quadriciclo.' target="_blank">Realizar Reserva</Link>
                            </Button>
                            <Button variant='secondary' className=" " asChild data-aos="fade-left" data-aos-duration="1000">
                                <Link to='/pacotes'>Nossos Pacotes</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}