import { FaCheck, FaStar } from "react-icons/fa";

import PasseioBuggy1 from '@/assets/PasseioBuggy/PASSEIOBUG1.webp'
import PasseioBuggy2 from '@/assets/PasseioBuggy/PASSEIOBUG2.webp'
import PasseioBuggy3 from '@/assets/PasseioBuggy/PASSEIOBUG3.webp'
import PasseioBuggy4 from '@/assets/PasseioBuggy/PASSEIOBUG4.webp'
import PasseioBuggy5 from '@/assets/PasseioBuggy/PASSEIOBUG5.webp'
import PasseioBuggy6 from '@/assets/PasseioBuggy/PASSEIOBUG6.webp'

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
                                    <h1 className="text-3xl font-bold text-slate-800">Passeio até Sagi</h1>
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
                    <p className="text-slate-600">- Iniciaremos em nossa base, onde passaremos todas as instruções e dicas.
                    </p>
                    <p className="text-slate-600 mt-2">- Em seguida, vamos em direção à praia do Bacupari, passando pelo Farol até chegarmos à nossa primeira parada, que é o Santuário das Tartarugas 🐢.
                    </p>
                    <p className="text-slate-600 mt-2">- Seguiremos por várias praias desertas até alcançarmos nossa próxima parada, o Mirante do Cotia, onde encontramos uma paisagem de tirar o fôlego, com vista para as praias desertas e os coqueiros ao fundo! 📸🤩
                    </p>
                    <p className="text-slate-600 mt-2">- Em seguida, pegaremos a trilha da Mata Estrela, com 2,4 km pela maior reserva de Mata Atlântica sobre as dunas do Brasil. O ar do local é muito puro e a natureza é deslumbrante!
                    </p>
                    <p className="text-slate-600 mt-2">- Chegaremos à formosa Lagoa da Coca-Cola, onde faremos uma parada para banho e fotos. A coloração avermelhada da lagoa é um espetáculo à parte.
                    </p>
                    <p className="text-slate-600 mt-2">- Nossa próxima parada será em Sagi, onde faremos uma parada opcional para o almoço, com opções de pastéis de camarão e arraia, além da famosa cachaça envelhecida em barril, disponível em sabores variados.
                    </p>
                    <p className="text-slate-600 mt-2">- Finalizamos nosso passeio na divisa RN/PB (Rio Guaju), onde ocorre o encontro do rio com o mar e há um parque eólico no alto, que brilha ainda mais com uma paisagem belíssima. Faremos uma parada para banho!</p>
                    <p className="text-slate-600 mt-2">- Lá, também temos opções do famoso espeto de lagosta, polvo e peixe. Além disso, há opções de stand up paddle e o passeio ecológico de manguezal em canoa.</p>
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