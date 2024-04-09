import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Vantagens } from "../components/vantagens";
import logo from '/logo.webp'
export function Sobre() {
    return (
        <div className="px-5 py-32 flex justify-center" id="sobre">
            <div className="w-[1100px]">
                <div className="md:grid grid-cols-2 items-center w-full">
                    <div>
                        <h1 className="font-bold text-3xl mb-2 text-slate-800">+ de 2130 Passeios já realizados</h1>
                        <p className="font-medium mb-2 text-slate-600">Descubra a essência da Baía Formosa connosco da Baía Formosa Tour! Desde 2019, estamos dedicados a oferecer uma experiência única e inesqucível. Nossa agência, agora especializada em turismo local, vai mais além dos passeios em quatro rodas, explorando as maravilhas da nossa cidade da melhor forma possível.</p>
                        <Button className="w-full flex justify-center" asChild>
                            <Link to='https://api.whatsapp.com/send/?phone=5584994511101&text=Ol%C3%A1%21+Gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+passeio+de+Quadriciclo+%EF%BF%BD%EF%BF%BD&type=phone_number&app_absent=0' target="_blank">Clique para conhecer a gente</Link>
                        </Button>
                    </div>
                    <div className="flex mt-10 md:justify-end justify-center">
                        <img src={logo} alt="logo do baía formosa tour" width={300} />
                    </div>
                </div>
                <div>
                    <Vantagens />
                </div>
            </div>
        </div>
    )
}