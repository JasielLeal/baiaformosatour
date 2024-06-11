import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import passeio1 from '@/assets/tituloCompleto.webp'
import passeio2 from '@/assets/tituloPorDoSol.webp'
import passeio3 from '@/assets/tituloBuggy.webp'
import passeio4 from '@/assets/PasseioManguezal/MANGUEZAL2.webp'
import passeio5 from '@/assets/PasseioPipa/PASSEIOPIPA1.webp'

export function PacotesTotal() {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
            <div className="flex justify-center px-5 py-10">
                <div className="max-w-[1100px]">
                    <div className="mt-20">
                        <div className="flex flex-col items-center">
                            <h1 className="font-medium text-primary">Pacotes</h1>
                            <h2 className="text-xl font-bold text-center mb-1 text-slate-800">Todos os nossos pacotes feitos especialmente para você.</h2>
                            <Badge>Recomendados</Badge>
                        </div>

                        <div className="my-10 flex flex-col gap-20 md:grid grid-cols-2 lg:grid-cols-3">
                            <div className="border p-5 rounded-lg bg-slate-800" data-aos="fade-down" data-aos-duration="1000" >
                                <h1 className="font-bold text-white text-2xl">Passeio Completo</h1>
                                <Badge className="mb-5">Mais popular</Badge>
                                <img src={passeio1} alt="passeio 1" className="object-cover rounded-md" />
                                <h1 className="text-3xl font-bold text-white my-5">R$ 349,99</h1>
                                <Button asChild className="w-full">
                                    <Link to='https://api.whatsapp.com/send?phone=5584994511101&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20passeio%20de%20Quadriciclo.' target="_blank">Reservar Agora</Link>
                                </Button>
                                <Button asChild className="w-full mt-5" variant={'secondary'}>
                                    <Link to='/passeiocompleto'>Detalhes</Link>
                                </Button>
                                <div className="mt-10 flex flex-col gap-2">
                                    <p className="flex items-center gap-2 text-white"><span className="text-primary"><FaCheck /></span>Valor por quadriciclo ( 2 pessoas)</p>
                                    <p className="flex items-center gap-2 text-white"><span className="text-primary"><FaCheck /></span>Guia a sua disposição</p>
                                    <p className="flex items-center gap-2 text-white"><span className="text-primary"><FaCheck /></span>Fotos/Vídeos</p>
                                    <p className="flex items-center gap-2 text-white"><span className="text-primary"><FaCheck /></span>37 km de Praias Desertas</p>
                                </div>
                            </div>
                            <div className="border p-5 rounded-lg" data-aos="fade-down" data-aos-duration="1000">
                                <h1 className="font-bold text-slate-800 text-2xl">Por do Sol</h1>
                                <Badge className="mb-5">Mais popular</Badge>
                                <img src={passeio2} alt="passeio 1" className="object-cover rounded-md" />
                                <h1 className="text-3xl font-bold text-slate-800 my-5">R$ 149,99</h1>
                                <Button asChild className="w-full">
                                    <Link to='https://api.whatsapp.com/send?phone=5584994511101&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20passeio%20de%20Quadriciclo.' target="_blank">Reservar Agora</Link>
                                </Button>
                                <Button asChild className="w-full mt-5" variant={'secondary'}>
                                    <Link to='/pordosol'>Detalhes</Link>
                                </Button>
                                <div className="mt-10 flex flex-col gap-2">
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>Valor por quadriciclo ( 2 pessoas)</p>
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>Guia a sua disposição</p>
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>Fotos/Vídeos</p>

                                </div>
                            </div>
                            <div className="border p-5 rounded-lg" data-aos="fade-down" data-aos-duration="1000">
                                <h1 className="font-bold text-slate-800 text-2xl">Passeio de Buggy</h1>
                                <Badge className="mb-5">Mais popular</Badge>
                                <img src={passeio3} alt="passeio 1" className="object-cover rounded-md" />
                                <h1 className="text-3xl font-bold text-slate-800 my-5">R$ 419,99</h1>
                                <Button asChild className="w-full">
                                    <Link to='https://api.whatsapp.com/send?phone=5584994511101&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20passeio%20de%20Quadriciclo.' target="_blank">Reservar Agora</Link>
                                </Button>
                                <Button asChild className="w-full mt-5" variant={'secondary'}>
                                    <Link to='/passeiodebuggy'>Detalhes</Link>
                                </Button>
                                <div className="mt-10 flex flex-col gap-2">
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>Valor por Buggy (até 4 pessoas)</p>
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>Bugueiro a sua disposição</p>
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span> Fotos/Vídeos</p>
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>37 km de Praias Desertas</p>
                                </div>
                            </div>
                            <div className="border p-5 rounded-lg" data-aos="fade-down" data-aos-duration="1000">
                                <h1 className="font-bold text-slate-800 text-2xl">Passeio Ecológico de Maguezal</h1>
                                <Badge className="mb-5">Mais popular</Badge>
                                <img src={passeio4} alt="passeio 1" className="object-cover rounded-md" />
                                <h1 className="text-3xl font-bold text-slate-800 my-5">R$ 29,99</h1>
                                <Button asChild className="w-full">
                                    <Link to='https://api.whatsapp.com/send?phone=5584994511101&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20passeio%20de%20Quadriciclo.' target="_blank">Reservar Agora</Link>
                                </Button>
                                <Button asChild className="w-full mt-5" variant={'secondary'}>
                                    <Link to='/passeiodemaguezal'>Detalhes</Link>
                                </Button>
                                <div className="mt-10 flex flex-col gap-2">
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>Valor por pessoa</p>
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>Guia a sua disposição</p>
                                </div>
                            </div>
                            <div className="border p-5 rounded-lg" data-aos="fade-down" data-aos-duration="1000">
                                <h1 className="font-bold text-slate-800 text-2xl">Passeio Turistico Da Pipa</h1>
                                <Badge className="mb-5">Mais popular</Badge>
                                <img src={passeio5} alt="passeio 1" className="object-cover rounded-md" />
                                <h1 className="text-3xl font-bold text-slate-800 my-5">R$ 599,99</h1>
                                <Button asChild className="w-full">
                                    <Link to='https://api.whatsapp.com/send?phone=5584994511101&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20passeio%20de%20Quadriciclo.' target="_blank">Reservar Agora</Link>
                                </Button>
                                <Button asChild className="w-full mt-5" variant={'secondary'}>
                                    <Link to='/passeiopipa'>Detalhes</Link>
                                </Button>
                                <div className="mt-10 flex flex-col gap-2">
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>Valor por quadriciclo ( 2 pessoas)</p>
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>Balsas inclusas</p>
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>Guia a sua disposição</p>
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>Fotos/Vídeos</p>
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>50 km de Praias e Falésias</p>
                                </div>
                            </div>
                            <div className="border p-5 rounded-lg" data-aos="fade-down" data-aos-duration="1000">
                                <h1 className="font-bold text-slate-800 text-2xl">Passeio Turistico até Sagi</h1>
                                <Badge className="mb-5">Mais popular</Badge>
                                <img src={passeio5} alt="passeio 1" className="object-cover rounded-md" />
                                <h1 className="text-3xl font-bold text-slate-800 my-5">R$ 269,99</h1>
                                <Button asChild className="w-full">
                                    <Link to='https://api.whatsapp.com/send?phone=5584994511101&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20passeio%20de%20Quadriciclo.' target="_blank">Reservar Agora</Link>
                                </Button>
                                <Button asChild className="w-full mt-5" variant={'secondary'}>
                                    <Link to='/passeiopipa'>Detalhes</Link>
                                </Button>
                                <div className="mt-10 flex flex-col gap-2">
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>Valor por quadriciclo ( 2 pessoas)</p>
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>Guia a sua disposição</p>
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>Fotos/Vídeos</p>
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>30 km de Praias e Falésias</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}