import { FaCheck, FaStar } from "react-icons/fa";

import Pordosol1 from '@/assets/PorDoSol/PORDOSOL1.webp'
import Pordosol2 from '@/assets/PorDoSol/PORDOSOL2.webp'
import Pordosol3 from '@/assets/PorDoSol/PORDOSOL3.webp'
import Pordosol4 from '@/assets/PorDoSol/PORDOSOL4.webp'
import Pordosol5 from '@/assets/PorDoSol/PORDOSOL5.webp'
import Pordosol6 from '@/assets/PorDoSol/PORDOSOL6.webp'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
export function PorDoSol() {
    return (
        <div className='lg:flex lg:justify-center'>
            <div className='lg:max-w-[1100px]'>
                <div className='lg:flex lg:w-full lg:justify-center pt-24 lg:max-w-[1100px]'>
                    <div className='lg:grid lg:grid-cols-2 lg:max-w-[1100px] gap-20'>
                        <Swiper slidesPerView={1} pagination={{ clickable: true }} modules={[Pagination]} className='w-full h-[500px] md:w-[500px] md:h-[600px]'>
                            <SwiperSlide>
                                <img src={Pordosol1} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Pordosol2} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Pordosol3} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Pordosol4} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Pordosol5} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Pordosol6} className='w-full h-full' />
                            </SwiperSlide>
                        </Swiper>
                        <div className="flex flex-col px-5">
                            <div>
                                <div>
                                    <Badge className="mt-5">Recomendado</Badge>
                                    <h1 className="text-3xl font-bold text-slate-800">Por do Sol</h1>
                                    <p className="text-2xl font-bold text-slate-800">R$ 219,99</p>
                                    <div className="flex text-primary">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <h1><span className="font-bold">Duração:</span> 01:00h</h1>
                                    <h1><span className="font-bold mb-2">O que está incluso?</span></h1>
                                    <div className="flex flex-col gap-2">
                                        <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>Valor por quadriciclo ( 2 pessoas)</p>
                                        <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span> Guia a sua disposição</p>
                                        <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span> Fotos / Vídeos Gratuitos</p>
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
                    <p className="text-slate-600">- Prepare-se para uma aventura emocionante e inesquecível na Baía Formosa! Nosso passeio de quadriciclo começa com uma subida incrível pelas dunas até o topo do Morro do Careca, onde você será recebido pelo espetáculo de um pôr do sol deslumbrante. Durante uma hora, você estará envolvido pela beleza natural da cidade, admirando a vista panorâmica de tirar o fôlego.</p>
                    <p className="text-slate-600 mt-2">- Viva esse momento de conexão com o meio ambiente e consigo mesmo.</p>
                    <p className="text-slate-600 mt-2">- Para tornar a experiência ainda mais especial, oferecemos a opção de um balde de champanhe ou vinho, para brindar ao fim de mais um dia conveniente. Não perca a chance de viver essa experiência única e se encantar com a magia do Morro do Careca ao entardecer.</p>
                </div>
                <div className="px-5 py-10">
                    <h1 className="font-semibold text-2xl  mb-10 text-slate-800">Recomendações</h1>
                    <p className="text-slate-600">- Roupas confortáveis</p>
                    <p className="text-slate-600">- Roupas de banho</p>
                    <p className="text-slate-600">- Toalhas</p>
                    <p className="text-slate-600">- Protetor Solar</p>
                    <p className="text-slate-600">- Óculos de sol</p>
                    <p className="text-slate-600">- Chapéu ou boné</p>
                    <p className="text-slate-600">- Dinheiro em espécie (pois não é todos os lugares que aceita pix)</p>
                </div>
            </div>
        </div>
    )
}