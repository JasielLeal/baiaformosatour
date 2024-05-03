import { FaArrowRight, FaCheck, FaStar } from "react-icons/fa";
import pipa1 from '@/assets/PasseioPipa/pipa1.webp'
import pipa2 from '@/assets/PasseioPipa/pipa2.webp'
import pipa3 from '@/assets/PasseioPipa/pipa3.webp'
import pipa4 from '@/assets/PasseioPipa/pipa4.webp'
import pipa5 from '@/assets/PasseioPipa/PASSEIOPIPA1.png'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
export function PasseioPipa() {
    return (
        <div className="flex justify-center pt-32">
            <div className="max-w-[1100px]">
                <div className="flex flex-col items-center ">
                    <div className="px-5 py-5 w-[320px] iphone:w-[375px] sm:w-[500px] lg:flex lg:w-[1000px] gap-10 xl:w-[1100px] rounded-md overflow-hidden ob">
                        <div className="flex justify-center items-center">
                            <Carousel className="flex justify-center flex-col">
                                <CarouselContent>
                                    <CarouselItem>
                                        <img src={pipa1} alt="passeio manguezal" className="iphone:w-[350px] lg:w-[500px] h-[700px] xl:w-[600px] rounded-lg object-cover object-bottom" />
                                    </CarouselItem>
                                    <CarouselItem>
                                        <img src={pipa2} alt="passeio manguezal" className="iphone:w-[350px] lg:w-[500px] h-[700px] xl:w-[600px] rounded-lg object-cover object-top" />
                                    </CarouselItem>
                                    <CarouselItem>
                                        <img src={pipa3} alt="passeio manguezal" className="iphone:w-[350px] lg:w-[500px] h-[700px] xl:w-[600px] rounded-lg object-cover " />
                                    </CarouselItem>
                                    <CarouselItem>
                                        <img src={pipa4} alt="passeio manguezal" className="iphone:w-[350px] lg:w-[500px] h-[700px] xl:w-[600px] rounded-lg object-cover" />
                                    </CarouselItem>
                                    <CarouselItem>
                                        <img src={pipa5} alt="passeio manguezal" className="iphone:w-[350px] lg:w-[500px] h-[700px] xl:w-[600px] rounded-lg object-cover" />
                                    </CarouselItem>
                                </CarouselContent>
                                <p className="flex items-center gap-2 text-slate-800 font-medium mt-4 md:px ">Arraste pro lado <FaArrowRight /></p>
                            </Carousel>


                        </div>
                        <div className="flex flex-col justify-between w-[300px] lg:w-[500px]">
                            <div>
                                <div>
                                    <Badge className="mt-10">Recomendado</Badge>
                                    <h1 className="text-3xl font-bold text-slate-800">Passeio de Pipa</h1>
                                    <p className="text-2xl font-bold text-slate-800">R$ 599,99</p>
                                    <div className="flex text-primary">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <h1><span className="font-bold">Duração:</span> 05:00h</h1>
                                    <h1><span className="font-bold mb-2">O que está incluso?</span></h1>
                                    <div className="flex flex-col gap-2">
                                        <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span> Valor por quadriciclo ( 2 pessoas)</p>
                                        <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span> Balsas inclusas</p>
                                        <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span> Guia a sua disposição</p>
                                        <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>  Fotos/Vídeos </p>
                                        <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span> 50 km de Praias e Falésias</p>
                                    </div>
                                </div>
                                <Button asChild className="mt-10 w-[280px]">
                                    <Link to='https://api.whatsapp.com/send?phone=5584994511101&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20passeio%20de%20Quadriciclo.' target="_blank">
                                        Realizar agendamento
                                    </Link>
                                </Button>
                            </div>
                            <div className="mt-5 sm:flex gap-2 justify-center xl:block">
                                <h1 className="text-slate-800 font-medium">Está com dúvidas?</h1>
                                <Link to='https://api.whatsapp.com/send?phone=5584994511101&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20passeio%20de%20Quadriciclo.' target="_blank" className="font-medium text-primary">
                                    Fale com nossa equipe
                                </Link>

                            </div>
                        </div>

                    </div>
                    <div className="px-5 py-10">
                        <h1 className="font-semibold text-2xl  mb-10 text-slate-800">Sobre a Atividade</h1>
                        <p className="text-slate-600">- Daremos início da nossa base, onde iremos passar todas as instruções e dicas necessárias.</p>
                        <p className="text-slate-600 mt-2">- Em seguida vamos em direção ao mirante do golfinhos, lá é a nossa primeira parada para fotos!</p>
                        <p className="text-slate-600 mt-2">- Seguimos pela praia até chegarmos na travessia de balsa para Barra do Cunhaú onde fazemos mais uma parada na Jacuzzi natural de Barra do cunhaú.</p>
                        <p className="text-slate-600 mt-2">- Vamos em direção a Sibaúma, passando pelos canaviais até chegarmos na ponte de madeira da Fazendinha.</p>
                        <p className="text-slate-600 mt-2">- A próxima parada será na belíssima paisagem do mirante do Morro vermelho!</p>
                        <p className="text-slate-600 mt-2">- Seguimos em direção a Pipa passando por várias falésias lindas, até chegamos no chapadão de Pipa, que tem uma vista de tirar o fôlego para a praia do amor!</p>
                    </div>

                    
                </div>
                <div className="px-5 py-10">
                        <h1 className="font-semibold text-2xl  mb-10 text-slate-800">Recomendações</h1>
                        <p className="text-slate-600">- Roupas confortáveis</p>
                        <p className="text-slate-600">- Roupas de banho</p>
                        <p className="text-slate-600">- Toalhas</p>
                        <p className="text-slate-600">- Protetor Solar</p>
                        <p className="text-slate-600">- Óculos de sol</p>
                        <p className="text-slate-600">- Chapéu ou bone</p>
                        <p className="text-slate-600">- Dinheiro em espécie (pois não é todos os lugares que aceita pix)</p>
                    </div>
            </div>
        </div>
    )
}