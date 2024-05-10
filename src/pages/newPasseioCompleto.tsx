import { FaCheck, FaStar } from "react-icons/fa";


import PasseioPipa1 from '@/assets/PasseioPipa/PASSEIOPIPA1.png'
import PasseioPipa2 from '@/assets/PasseioPipa/PASSEIOPIPA2.png'
import PasseioPipa3 from '@/assets/PasseioPipa/PASSEIOPIPA3.png'
import PasseioPipa4 from '@/assets/PasseioPipa/PASSEIOPIPA4.png'
import PasseioPipa5 from '@/assets/PasseioPipa/PASSEIOPIPA5.png'
import PasseioPipa6 from '@/assets/PasseioPipa/PASSEIOPIPA6.png'
import PasseioPipa7 from '@/assets/PasseioPipa/PASSEIOPIPA7.png'
import PasseioPipa8 from '@/assets/PasseioPipa/PASSEIOPIPA8.png'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
export function PorDoSole() {
    return (
        <div className='lg:flex lg:justify-center'>
            <div className='lg:max-w-[1100px]'>
                <div className='lg:flex lg:w-full lg:justify-center pt-24 lg:max-w-[1100px]'>
                    <div className='lg:grid lg:grid-cols-2 lg:max-w-[1100px] gap-20'>
                        <Swiper slidesPerView={1} pagination={{ clickable: true }} modules={[Pagination]} className='w-full h-[500px] md:w-[500px] md:h-[600px]'>
                            <SwiperSlide>
                                <img src={PasseioPipa1} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PasseioPipa2} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PasseioPipa3} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PasseioPipa4} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PasseioPipa5} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PasseioPipa6} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PasseioPipa7} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PasseioPipa8} className='w-full h-full' />
                            </SwiperSlide>

                        </Swiper>
                        <div className="flex flex-col px-5">
                            <div>
                                <div>
                                    <Badge className="mt-5">Recomendado</Badge>
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
                    <p className="text-slate-600 mt-2">- Em seguida vamos em direção ao mirante do golfinhos, lá é a nossa primeira parada para fotos!</p>
                    <p className="text-slate-600 mt-2">- Seguimos pela praia até chegarmos na travessia de balsa para Barra do Cunhaú onde fazemos mais uma parada na Jacuzzi natural de Barra do cunhaú.</p>
                    <p className="text-slate-600 mt-2">- Vamos em direção a Sibaúma, passando pelos canaviais até chegarmos na ponte de madeira da Fazendinha.</p>
                    <p className="text-slate-600 mt-2">- A próxima parada será na belíssima paisagem do mirante do Morro vermelho!</p>
                    <p className="text-slate-600 mt-2">- Seguimos em direção a Pipa passando por várias falésias lindas, até chegamos no chapadão de Pipa, que tem uma vista de tirar o fôlego para a praia do amor!</p>
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