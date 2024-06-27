import Passeiocompleto1 from '@/assets/PasseioCompleto/PASSEIOCOMPLETO1.webp'
import Passeiocompleto2 from '@/assets/PasseioCompleto/PASSEIOCOMPLETO2.webp'
import Passeiocompleto3 from '@/assets/PasseioCompleto/PASSEIOCOMPLETO3.webp'
import Passeiocompleto4 from '@/assets/PasseioCompleto/PASSEIOCOMPLETO4.webp'
import Passeiocompleto5 from '@/assets/PasseioCompleto/PASSEIOCOMPLETO5.webp'
import Passeiocompleto6 from '@/assets/PasseioCompleto/PASSEIOCOMPLETO6.webp'
import Passeiocompleto7 from '@/assets/PasseioCompleto/PASSEIOCOMPLETO7.webp'
import Passeiocompleto8 from '@/assets/PasseioCompleto/PASSEIOCOMPLETO8.webp'
import Passeiocompleto9 from '@/assets/PasseioCompleto/PASSEIOCOMPLETO9.webp'
import Passeiocompleto10 from '@/assets/PasseioCompleto/PASSEIOCOMPLETO10.webp'
import Passeiocompleto11 from '@/assets/PasseioCompleto/PASSEIOCOMPLETO11.webp'
import Passeiocompleto12 from '@/assets/PasseioCompleto/PASSEIOCOMPLETO12.webp'
import Passeiocompleto13 from '@/assets/PasseioCompleto/PASSEIOCOMPLETO13.webp'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaCheck, FaStar } from 'react-icons/fa'
export function PasseioCompleto() {
    return (
        <div className='lg:flex lg:justify-center'>
            <div className='lg:max-w-[1100px]'>
                <div className='lg:flex lg:w-full lg:justify-center pt-24 lg:max-w-[1100px]'>
                    <div className='lg:grid lg:grid-cols-2 lg:max-w-[1100px] gap-20'>
                        <Swiper slidesPerView={1} pagination={{ clickable: true }} modules={[Pagination]} className='w-full h-[500px] md:w-[500px] md:h-[600px]'>
                            <SwiperSlide>
                                <img src={Passeiocompleto1} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Passeiocompleto2} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Passeiocompleto3} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Passeiocompleto4} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Passeiocompleto5} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Passeiocompleto6} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Passeiocompleto7} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Passeiocompleto8} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Passeiocompleto9} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Passeiocompleto10} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Passeiocompleto11} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Passeiocompleto12} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Passeiocompleto13} className='w-full h-full' />
                            </SwiperSlide>
                        </Swiper>
                        <div className="flex flex-col px-5">
                            <div>
                                <div>
                                    <Badge className="mt-5">Recomendado</Badge>
                                    <h1 className="text-3xl font-bold text-slate-800">Passeio Completo</h1>
                                    <p className="text-2xl font-bold text-slate-800">R$ 369,99</p>
                                    <div className="flex text-primary">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <h1><span className="font-bold">Duração:</span> 03:30h</h1>
                                    <h1><span className="font-bold mb-2">O que está incluso?</span></h1>
                                    <div className="flex flex-col gap-2">
                                        <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span> Valor por quadriciclo ( 2 pessoas)</p>
                                        <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span> Guia a sua disposição</p>
                                        <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span> Fotos / Vídeos Gratuitos</p>
                                        <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span> 37 km de Praias Desertas</p>
                                    </div>
                                </div>
                                <Button asChild className="mt-10 w-[290px]">
                                    <Link to='https://api.whatsapp.com/send?phone=5584994511101&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Ba%C3%ADa%20Formosa%20tour%20e%20tenho%20interesse%20no%20passeio%20completo%20de%20quadriciclo.' target="_blank">
                                        Realizar agendamento
                                    </Link>
                                </Button>
                            </div>
                            <div className="mt-5">
                                <h1 className="text-slate-800 font-medium">Está com dúvidas?</h1>
                                <Link to='https://api.whatsapp.com/send?phone=5584994511101&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Ba%C3%ADa%20Formosa%20tour%20e%20tenho%20interesse%20no%20passeio%20completo%20de%20quadriciclo.' target="_blank" className="font-medium text-primary">
                                    Fale com nossa equipe
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-5 py-10">
                    <h1 className="font-semibold text-2xl  mb-10 text-slate-800">Sobre a Atividade</h1>
                    <p className="text-slate-600">- Iniciaremos em nossa base, onde passaremos todas as instruções e dicas.
                    </p>
                    <p className="text-slate-600 mt-2">- Em seguida, vamos em direção à praia do Bacupari, passando pelo Farol até chegarmos à nossa primeira parada, que é o Santuário das Tartarugas 🐢.</p>
                    <p className="text-slate-600 mt-2">- Seguiremos por várias praias desertas até alcançarmos nossa próxima parada, o Mirante do Cotia, onde encontramos uma paisagem de tirar o fôlego, com vista para as praias desertas e os coqueiros ao fundo! 📸🤩
                    </p>
                    <p className="text-slate-600 mt-2">-Continuaremos em direção a Sagi, onde faremos uma parada opcional para o almoço, com opções de pastéis de camarão e arraia, além da famosa cachaça envelhecida em barril, disponível em sabores variados.</p>

                    <p className="text-slate-600 mt-2">- Finalizamos nosso passeio na divisa RN/PB (Rio Guaju), onde ocorre o encontro do rio com o mar e há um parque eólico no alto, que abrilhanta ainda mais a belíssima paisagem, com uma parada para banho.
                    </p>

                    <p className="text-slate-600 mt-2">- Lá, também temos opções do famoso espeto de lagosta, polvo e peixe. Além disso, há opções de stand up paddle e o passeio ecológico de manguezal em canoa.
                    </p>

                    <p className="text-slate-600 mt-2">- No retorno do passeio, fazemos uma parada no Morro do Careca, onde subimos pelas dunas para apreciar uma vista magnífica do alto, contemplando o mar e a paisagem da Baía Formosa
                    </p>
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