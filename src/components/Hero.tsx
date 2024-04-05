import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Hero() {
    return (
        <div id="home">
            <div className="w-full h-screen bg-[url('/bgphonev2.png')] lg:bg-[url('/site.png')] bg-cover pt-52 flex px-5 pb-10 bg-center justify-center">
                <div className="max-w-[1100px]">
                    <div className="">
                        <Badge variant="default" className="mb-2 lg:text-base">Empresa especializa em turismo</Badge>
                        <h1 className="uppercase text-white font-bold text-4xl lg:text-6xl">Vem viver essa<br />experiência de maneira<br />única!</h1>
                        <p className="font-normal text-white lg:text-xl sm:max-w-[740px]">Aproveite o melhor da natureza, da aventura e da liberdade em um passeio imperdível, onde as paisagens se tornam seus caminhos.</p>
                        <div className="mt-4 flex gap-2">
                            <Button variant='default' asChild>
                                <Link to='https://api.whatsapp.com/send/?phone=5584994511101&text=Ol%C3%A1%21+Gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+passeio+de+Quadriciclo+%EF%BF%BD%EF%BF%BD&type=phone_number&app_absent=0' target="_blank">Realizar Reserva</Link>
                            </Button>
                            <Button variant='secondary' className=" " asChild>
                                <Link to='#pacotes'>Nossos Pacotes</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}