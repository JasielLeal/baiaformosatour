import { FaCheck, FaStar } from "react-icons/fa";

import PasseioSagi1 from '@/assets/PasseioSagi/PASSEIOSAGI1.webp'
import PasseioSagi2 from '@/assets/PasseioSagi/PASSEIOSAGI2.webp'
import PasseioSagi3 from '@/assets/PasseioSagi/PASSEIOSAGI3.webp'
import PasseioSagi4 from '@/assets/PasseioSagi/PASSEIOSAGI4.webp'
import PasseioSagi5 from '@/assets/PasseioSagi/PASSEIOSAGI5.webp'
import PasseioSagi6 from '@/assets/PasseioSagi/PASSEIOSAGI6.webp'
import PasseioSagi7 from '@/assets/PasseioSagi/PASSEIOSAGI7.webp'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
export function PasseioSagi() {
    return (
        <div className='lg:flex lg:justify-center'>
            <div className='lg:max-w-[1100px]'>
                <div className='lg:flex lg:w-full lg:justify-center pt-24 lg:max-w-[1100px]'>
                    <div className='lg:grid lg:grid-cols-2 lg:max-w-[1100px] gap-20'>
                        <Swiper slidesPerView={1} pagination={{ clickable: true }} modules={[Pagination]} className='w-full h-[500px] md:w-[500px] md:h-[600px]'>
                            <SwiperSlide>
                                <img src={PasseioSagi1} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PasseioSagi2} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PasseioSagi3} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PasseioSagi4} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PasseioSagi5} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PasseioSagi6} className='w-full h-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PasseioSagi7} className='w-full h-full' />
                            </SwiperSlide>


                        </Swiper>
                        <div className="flex flex-col px-5">
                            <div>
                                <div>
                                    <Badge className="mt-5">Recomendado</Badge>
                                    <h1 className="text-3xl font-bold text-slate-800">Passeio Rota Sagi</h1>
                                    <p className="text-2xl font-bold text-slate-800">R$ 269,99</p>
                                    <div className="flex text-primary">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <h1><span className="font-bold">Duração:</span> 02:30h</h1>
                                    <h1><span className="font-bold mb-2">O que está incluso?</span></h1>
                                    <div className="flex flex-col gap-2">
                                        <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span> </p>
                                        <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span> Guia a Disposição</p>
                                        <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span> Fotos / Vídeos Gratuitos</p>
                                        <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span> 30 km de Praias Desertas</p>
                                    </div>
                                </div>
                                <Button asChild className="mt-10 w-[290px]">
                                    <Link to='https://api.whatsapp.com/send?phone=5584994511101&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Ba%C3%ADa%20Formosa%20tour%20e%20tenho%20interesse%20na%20Rota%20sagi%20de%20quadriciclo.' target="_blank">
                                        Realizar agendamento
                                    </Link>
                                </Button>
                            </div>
                            <div className="mt-5">
                                <h1 className="text-slate-800 font-medium">Está com dúvidas?</h1>
                                <Link to='https://api.whatsapp.com/send?phone=5584994511101&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Ba%C3%ADa%20Formosa%20tour%20e%20tenho%20interesse%20na%20Rota%20sagi%20de%20quadriciclo.' target="_blank" className="font-medium text-primary">
                                    Fale com nossa equipe
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-5 py-10">
                    <p className="font-semibold text-2xl  mb-10 text-slate-800">Sobre a Atividade</p>
                    <p className="text-slate-600">- Iniciaremos em nossa base, onde passaremos todas as instruções e dicas.
                    </p>
                    <p className="text-slate-600 mt-2">- Em seguida, vamos em direção à praia do Bacupari, passando pelo Farol até chegarmos à nossa primeira parada, que é o Santuário das Tartarugas 🐢.</p>
                    <p className="text-slate-600 mt-2">- Seguiremos por várias praias desertas até alcançarmos nossa próxima parada, o Mirante do Cotia, onde encontramos uma paisagem de tirar o fôlego, com vista para as praias desertas e os coqueiros ao fundo! 📸🤩
                    </p>
                    <p className="text-slate-600 mt-2">- Continuaremos até Sagi, onde faremos uma parada para desfrutar das águas do belíssimo Rio Sagi, com opção para almoço e passeio de canoa pelo manguezal.</p>

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
                    <p className="text-slate-600">- Chapéu ou bone</p>
                    <p className="text-slate-600">- Dinheiro em espécie (pois não é todos os lugares que aceita pix)</p>
                </div>
            </div>
        </div>
    )
}