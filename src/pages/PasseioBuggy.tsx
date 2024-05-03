import { FaArrowRight, FaCheck, FaStar } from "react-icons/fa";
import buggy1 from '@/assets/PasseioBuggy/buggy1.webp'
import buggy2 from '@/assets/PasseioBuggy/buggy2.webp'
import buggy3 from '@/assets/PasseioBuggy/buggy3.webp'
import buggy4 from '@/assets/PasseioBuggy/buggy4.webp'
import buggy5 from '@/assets/PasseioBuggy/buggy5.jpeg'
import buggy6 from '@/assets/PasseioBuggy/buggy6.jpeg'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
export function PasseioDeBuggy() {
    return (
        <div className="flex justify-center pt-32 ">
            <div className="max-w-[1100px]">
                <div className="flex flex-col items-center ">
                    <div className="px-5 py-5 w-[320px] iphone:w-[375px] sm:w-[500px] lg:flex lg:w-[1000px] gap-10 xl:w-[1100px] rounded-md overflow-hidden">
                        <div className="flex justify-center items-center">
                            <Carousel className="flex justify-center flex-col">
                                <CarouselContent>
                                    <CarouselItem>
                                        <img src={buggy1} alt="passeio de buggy" className="lg:w-[500px] h-[700px] xl:w-[600px] rounded-lg object-cover" />
                                    </CarouselItem>
                                    <CarouselItem>
                                        <img src={buggy2} alt="passeio de buggy" className="lg:w-[500px] h-[700px] xl:w-[600px] rounded-lg object-cover" />
                                    </CarouselItem>
                                    <CarouselItem>
                                        <img src={buggy3} alt="passeio de buggy" className="lg:w-[500px] h-[700px] xl:w-[600px] rounded-lg object-cover" />
                                    </CarouselItem>
                                    <CarouselItem>
                                        <img src={buggy4} alt="passeio de buggy" className="lg:w-[500px] h-[700px] xl:w-[600px] rounded-lg object-cover" />
                                    </CarouselItem>
                                    <CarouselItem>
                                        <img src={buggy5} alt="passeio de buggy" className="lg:w-[500px] h-[700px] xl:w-[600px] rounded-lg object-cover " />
                                    </CarouselItem>
                                    <CarouselItem>
                                        <img src={buggy6} alt="passeio de buggy" className="lg:w-[500px] h-[700px] xl:w-[600px] rounded-lg object-cover " />
                                    </CarouselItem>
                                </CarouselContent>
                                <p className="flex items-center gap-2 text-slate-800 font-medium mt-4 md:px ">Arraste pro lado <FaArrowRight /></p>
                            </Carousel>


                        </div>
                        <div className="flex flex-col justify-between w-[500px]">
                            <div>
                                <div>
                                    <Badge className="mt-10">Recomendado</Badge>
                                    <h1 className="text-3xl font-bold text-slate-800">Passeio De Buggy</h1>
                                    <p className="text-2xl font-bold text-slate-800">R$ 419,99</p>
                                    <div className="flex text-primary">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <h1><span className="font-bold">Duração:</span> 03:00h</h1>
                                    <h1><span className="font-bold mb-2">O que está incluso?</span></h1>
                                    <div className="flex flex-col gap-2">
                                        <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span> Valor do buggy ( 4 pessoas)</p>
                                        <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span> Bugueiro a sua disposição</p>
                                        <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span> Fotos / Vídeos Gratuitos</p>
                                        <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span> 37 km de Paias Desertas</p>
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
                        <p className="text-slate-600 mt-2">- Em seguida vamos em direção à praia do Bacupari, passamos pelo Farol e chegamos na nossa primeira parada que é o Santuário das tartarugas 🐢 </p>
                        <p className="text-slate-600 mt-2">- Seguimos por várias praias desertas até chegarmos na nossa próxima parada, que é o Mirante do Cotia, lá encontramos uma paisagem de tirar o fôlego, para as praias desertas  e os coqueiros de fundo!  📸🤩
                        </p>
                        <p className="text-slate-600 mt-2">- Pegamos a trilha da Mata Estrela 2,4 km (Maior Reserva de Mata Atlântica sobre dunas do Brasil), o ar do Local é muito Puro e a natureza desse local maravilhosa!.</p>
                        <p className="text-slate-600 mt-2">- Chegamos até a formosíssima Lagoa da Coco-Cola, onde fazemos um parada para banho e Fotos, a coloração da lagoa chama muito atenção, em tom avermelhado 
                        </p>
                        <p className="text-slate-600 mt-2">- Na próxima parada vamos em direção a Sagi onde fazemos a parada opcional de almoço, com também opções de pastéis de camarão e arraia, e aquela cachaça envelhecida em Barril de variados sabores.</p>
                        <p className="text-slate-600 mt-2">- Finalizamos o nosso passeio na Divisa RN/PB (Rio Guaju) com o encontro do Rio com o mar e um parque eólico no alto que abrilhanta mais ainda a belíssima paisagem, com parada para banho!</p>
                        <p className="text-slate-600 mt-2">- Lá tbm temos opções do famosíssimo espetinho de lagosta, polvo e peixe! Também temos opções de stand up e o Passeio ecológico de manguezal na canoa!</p>
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