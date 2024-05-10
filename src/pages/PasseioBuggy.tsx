import { FaCheck, FaStar } from "react-icons/fa";

import PasseioBuggy1 from '@/assets/PasseioBuggy/PASSEIOBUG1.png'
import PasseioBuggy2 from '@/assets/PasseioBuggy/PASSEIOBUG2.png'
import PasseioBuggy3 from '@/assets/PasseioBuggy/PASSEIOBUG3.png'
import PasseioBuggy4 from '@/assets/PasseioBuggy/PASSEIOBUG4.png'
import PasseioBuggy5 from '@/assets/PasseioBuggy/PASSEIOBUG5.png'
import PasseioBuggy6 from '@/assets/PasseioBuggy/PASSEIOBUG6.png'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
export function PasseioDeBuggy() {
    return (
        <div className='lg:flex lg:justify-center'>
            <div className='lg:max-w-[1100px]'>
                <div className='lg:flex lg:w-full lg:justify-center pt-24 lg:max-w-[1100px]'>
                    <div className='lg:grid lg:grid-cols-2 lg:max-w-[1100px] gap-20'>
                        <Swiper slidesPerView={1} pagination={{ clickable: true }} modules={[Pagination]} className='w-full h-[500px] md:w-[500px] md:h-[600px]'>
                            <SwiperSlide>
                                <img src={PasseioBuggy1} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PasseioBuggy2} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PasseioBuggy3} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PasseioBuggy4} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PasseioBuggy5} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PasseioBuggy6} className='w-full h-full' />
                            </SwiperSlide>


                        </Swiper>
                        <div className="flex flex-col px-5">
                            <div>
                                <div>
                                    <Badge className="mt-5">Recomendado</Badge>
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
                                <Button asChild className="mt-10 w-[290px]">
                                    <Link to='https://api.whatsapp.com/send?phone=5584994511101&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20passeio%20de%20Quadriciclo.' target="_blank">
                                        Realizar agendamento
                                    </Link>
                                </Button>
                            </div>
                            <div className="mt-5">
                                <h1 className="text-slate-800 font-medium">Está com dúvidas?</h1>
                                <Link to='https://api.whatsapp.com/send?phone=5584994511101&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20passeio%20de%20Quadriciclo.' target="_blank" className="font-medium text-primary">
                                    Fale com nossa equipe
                                </Link>

                            </div>
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