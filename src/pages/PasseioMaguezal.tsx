import { FaArrowRight, FaCheck, FaStar } from "react-icons/fa";
import manguezal1 from '@/assets/PasseioManguezal/manguezal1.jpg'
import manguezal2 from '@/assets/PasseioManguezal/manguezal2.webp'
import manguezal3 from '@/assets/PasseioManguezal/manguezal3.png'
import manguezal4 from '@/assets/PasseioManguezal/manguezal4.webp'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
export function PasseioMaguezal() {
    return (
        <div className="flex justify-center pt-32">
            <div className="max-w-[1100px]">
                <div className="flex flex-col items-center ">
                    <div className="px-5 py-5 w-[320px] iphone:w-[375px] sm:w-[500px] lg:flex lg:w-[1000px] gap-10 xl:w-[1100px] rounded-md overflow-hidden ob">
                        <div className="flex justify-center items-center">
                            <Carousel className="flex justify-center flex-col">
                                <CarouselContent>
                                    <CarouselItem>
                                        <img src={manguezal1} alt="passeio manguezal" className="iphone:w-[350px] lg:w-[500px] h-[700px] xl:w-[600px] rounded-lg object-cover" />
                                    </CarouselItem>
                                    <CarouselItem>
                                        <img src={manguezal2} alt="passeio manguezal" className="iphone:w-[350px] lg:w-[500px] h-[700px] xl:w-[600px] rounded-lg object-cover" />
                                    </CarouselItem>
                                    <CarouselItem>
                                        <img src={manguezal3} alt="passeio manguezal" className="iphone:w-[350px] lg:w-[500px] h-[700px] xl:w-[600px] rounded-lg object-cover" />
                                    </CarouselItem>
                                    <CarouselItem>
                                        <img src={manguezal4} alt="passeio manguezal" className="iphone:w-[350px] lg:w-[500px] h-[700px] xl:w-[600px] rounded-lg object-cover" />
                                    </CarouselItem>
                                </CarouselContent>
                                <p className="flex items-center gap-2 text-slate-800 font-medium mt-4 md:px ">Arraste pro lado <FaArrowRight /></p>
                            </Carousel>


                        </div>
                        <div className="flex flex-col justify-between w-[300px] lg:w-[500px]">
                            <div>
                                <div>
                                    <Badge className="mt-10">Recomendado</Badge>
                                    <h1 className="text-3xl font-bold text-slate-800">Passeio Ecológico de Maguezal</h1>
                                    <p className="text-2xl font-bold text-slate-800">R$ 29,99</p>
                                    <div className="flex text-primary">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <h1><span className="font-bold">Duração:</span> 30M</h1>
                                    <h1><span className="font-bold mb-2">O que está incluso?</span></h1>
                                    <div className="flex flex-col gap-2">
                                        <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span> Valor por pessoa</p>
                                        <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span> Guia a sua disposição</p>
                                        <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span> Banho de argila</p>
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
                        <p className="text-slate-600">- Descubra a tranquilidade de Sagi em um passeio de canoa que oferece uma conexão maravilhosa com a natureza intocada. Navegue pelas águas calmas do Rio Guajú, deixando-se envolver pela paz que envolve a região.</p>
                        <p className="text-slate-600 mt-2">- Experimente a sensação revitalizante de mergulhar nas águas cristalinas do belíssimo Rio Guaju, enriquecidas com banho de argila rejuvenescedora. Deixe que a argila purifique sua pele, renovando-a e revitalizando-a enquanto você se entrega ao bem-estar que só a natureza pode proporcionar.</p>
                        <p className="text-slate-600 mt-2">- Desperte seus sentidos, revigore sua mente e renove sua alma neste refúgio de serenidade. Reserve seu passeio de canoa em Sagi hoje mesmo e permita-se mergulhar em um oásis de tranquilidade e beleza natural. Sua jornada de paz e renovação espera por você.</p>
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