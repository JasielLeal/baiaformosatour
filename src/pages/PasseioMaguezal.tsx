import { FaCheck, FaStar } from "react-icons/fa";

import Manguezal1 from '@/assets/PasseioManguezal/MANGUEZAL1.webp'
import Manguezal2 from '@/assets/PasseioManguezal/MANGUEZAL2.webp'
import Manguezal4 from '@/assets/PasseioManguezal/MANGUEZAL4.webp'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
export function PasseioMaguezal() {
    return (
        <div className='lg:flex lg:justify-center'>
            <div className='lg:max-w-[1100px]'>
                <div className='lg:flex lg:w-full lg:justify-center pt-24 lg:max-w-[1100px]'>
                    <div className='lg:grid lg:grid-cols-2 lg:max-w-[1100px] gap-20'>
                        <Swiper slidesPerView={1} pagination={{ clickable: true }} modules={[Pagination]} className='w-full h-[500px] md:w-[500px] md:h-[600px]'>
                            <SwiperSlide>
                                <img src={Manguezal1} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Manguezal2} className='w-full h-full' />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src={Manguezal4} className='w-full h-full' />
                            </SwiperSlide>

                        </Swiper>
                        <div className="flex flex-col px-5 items-center lg:items-start">
                            <div>
                                <div>
                                    <Badge className="mt-5">Recomendado</Badge>
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
                    <p className="text-slate-600">- Descubra a tranquilidade de Sagi em um passeio de canoa que proporciona uma conexão profunda com a natureza intocada. Navegue pelas águas calmas do Rio Guajú, deixando-se envolver pela serenidade que permeia a região.</p>
                    <p className="text-slate-600 mt-2">- Experimente a sensação revitalizante de mergulhar nas águas cristalinas do belíssimo Rio Guajú, complementada com um banho de argila rejuvenescedora. Permita que a argila purifique sua pele, renovando-a e revitalizando-a enquanto você entrega ao bem-estar proporcionado pela natureza.</p>
                    <p className="text-slate-600 mt-2">- Desperte seus sentidos, revigore sua mente e renove sua alma neste refúgio de serenidade. Reserve hoje mesmo seu passeio de canoa em Sagi e permita-se mergulhar em um oásis de tranquilidade e beleza natural. Sua jornada de paz e renovação espera por você.</p>
                </div>
                <div className="px-5 py-10">
                    <h1 className="font-semibold text-2xl  mb-10 text-slate-800">Recomendações</h1>
                    <p className="text-slate-600">- Roupas confortáveis</p>
                    <p className="text-slate-600">- Roupas de banho</p>
                    <p className="text-slate-600">- Toalhas</p>
                    <p className="text-slate-600">- Protetor Solar</p>
                    <p className="text-slate-600">- Óculos de sol</p>
                    <p className="text-slate-600">- Chapéu ou bweb</p>
                    <p className="text-slate-600">- Dinheiro em espécie (pois não é todos os lugares que aceita pix)</p>
                </div>
            </div>
        </div>
    )
}