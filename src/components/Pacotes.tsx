import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import passeio1 from '@/assets/tituloCompleto.webp'
import passeio2 from '@/assets/PorDoSol/PORDOSOL01.webp'
import passeio3 from '@/assets/PasseioBuggy/PASSEIOBUG2.webp'
export function Pacotes() {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
            <div className="flex justify-center px-5 py-10">
                <div className="max-w-[1100px]">
                    <div className="">
                        <div className="flex flex-col items-center" data-aos="fade-down" data-aos-duration="500">
                            <h1 className="font-medium text-primary">Pacotes</h1>
                            <h2 className="text-xl font-bold text-center mb-1 text-slate-800">Nossas recomendações destacadas de pacotes para você.</h2>
                            <Badge>Recomendados</Badge>
                        </div>

                        <div className="my-10 flex flex-col gap-20 md:grid grid-cols-2 lg:grid-cols-3"  >
                            <div className="border p-5 rounded-lg bg-slate-800" data-aos="fade-down" data-aos-duration="1000" >
                                <h1 className="font-bold text-white text-2xl">Passeio Completo</h1>
                                <Badge className="mb-5">Mais popular</Badge>
                                <img src={passeio1} alt="passeio 1" className="object-cover rounded-md" width={388} height={517}/>
                                <h1 className="text-3xl font-bold text-white my-5">R$ 369,99</h1>
                                <Button asChild className="w-full">
                                    <Link to='https://api.whatsapp.com/send?phone=5584994511101&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Ba%C3%ADa%20Formosa%20tour%20e%20tenho%20interesse%20no%20passeio%20completo%20de%20quadriciclo.' target="_blank">Reservar Agora</Link>
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
                                <h1 className="font-bold text-slate-800 text-2xl">Rota Por do Sol</h1>
                                <Badge className="mb-5">Mais popular</Badge>
                                <img src={passeio2} alt="passeio 1" className="object-cover rounded-md" />
                                <h1 className="text-3xl font-bold text-slate-800 my-5">R$ 219,99</h1>
                                <Button asChild className="w-full">
                                    <Link to='https://api.whatsapp.com/send?phone=5584994511101&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Ba%C3%ADa%20Formosa%20tour%20e%20tenho%20interesse%20na%20Rota%20do%20por%20do%20sol%20de%20quadriciclo.' target="_blank">Reservar Agora</Link>
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
                                <h1 className="text-3xl font-bold text-slate-800 my-5">R$ 449,99</h1>
                                <Button asChild className="w-full">
                                    <Link to='https://api.whatsapp.com/send?phone=5584994511101&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Ba%C3%ADa%20Formosa%20tour%20e%20tenho%20interesse%20no%20passeio%20de%20Buggy.' target="_blank">Reservar Agora</Link>
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

                        </div>

                        <div className="flex items-center justify-center">
                            <Button asChild className="flex items-center justify-center">
                                <Link to='/pacotes' className="w-full md:w-2/4">Veja todos nossos pacotes</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}