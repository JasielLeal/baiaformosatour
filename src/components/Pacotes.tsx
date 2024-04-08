import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";


export function Pacotes() {
    return (
        <>
            <div className="flex justify-center px-5 py-10">
                <div className="max-w-[1100px]">
                    <div className="">
                        <div className="flex flex-col items-center">
                            <h1 className="font-medium text-primary">Pacotes</h1>
                            <h2 className="text-xl font-bold text-center mb-1 text-slate-800">Nossas recomendações destacadas de pacotes para você.</h2>
                            <Badge>Recomendados</Badge>
                        </div>

                        <div className="my-10 flex flex-col gap-20 md:grid grid-cols-2 lg:grid-cols-3">
                            <div className="border p-5 rounded-lg">
                                <h1 className="font-bold text-slate-800 text-2xl mb-5">Por do Sol</h1>
                                <p className="text-slate-600">Desfrute da magnífica beleza natural da cidade, contemplando uma vista panorâmica de tirar o fôlego.</p>
                                <h1 className="text-3xl font-bold text-slate-800 my-5">R$ 120,00</h1>
                                <Button asChild className="w-full">
                                    <Link to='https://api.whatsapp.com/send/?phone=5584994511101&text=Ol%C3%A1%21+Gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+passeio+de+Quadriciclo+%EF%BF%BD%EF%BF%BD&type=phone_number&app_absent=0' target="_blank">Reservar Agora</Link>
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
                            <div className="border p-5 rounded-lg">
                                <h1 className="font-bold text-slate-800 text-2xl mb-5">Passeio de Buggy</h1>
                                <p className="text-slate-600">Uma opção ideal para aqueles que procuram apreciar paisagens magníficas de forma mais tranquila, livre e segura.</p>
                                <h1 className="text-3xl font-bold text-slate-800 my-5">R$ 420,00</h1>
                                <Button asChild className="w-full">
                                    <Link to='https://api.whatsapp.com/send/?phone=5584994511101&text=Ol%C3%A1%21+Gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+passeio+de+Quadriciclo+%EF%BF%BD%EF%BF%BD&type=phone_number&app_absent=0' target="_blank">Reservar Agora</Link>
                                </Button>
                                <Button asChild className="w-full mt-5" variant={'secondary'}>
                                    <Link to='/passeiodebuggy'>Detalhes</Link>
                                </Button>
                                <div className="mt-10 flex flex-col gap-2">
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>Valor por Buggy (até 4 pessoas)</p>
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>Bugueiro a sua disposição</p>
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span> Fotos/Vídeos</p>
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>37 km de Paias Desertas</p>
                                </div>
                            </div>
                            <div className="border p-5 rounded-lg">
                                <h1 className="font-bold text-slate-800 text-2xl mb-5">Passeio Completo</h1>
                                <p className="text-slate-600">Uma experiência excepcional para aqueles que buscam paisagens deslumbrantes e magníficas de forma radical e segura</p>
                                <h1 className="text-3xl font-bold text-slate-800 my-5">R$ 350,00</h1>
                                <Button asChild className="w-full">
                                    <Link to='https://api.whatsapp.com/send/?phone=5584994511101&text=Ol%C3%A1%21+Gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+passeio+de+Quadriciclo+%EF%BF%BD%EF%BF%BD&type=phone_number&app_absent=0' target="_blank">Reservar Agora</Link>
                                </Button>
                                <Button asChild className="w-full mt-5" variant={'secondary'}>
                                    <Link to='/passeiocompleto'>Detalhes</Link>
                                </Button>
                                <div className="mt-10 flex flex-col gap-2">
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>Valor por quadriciclo ( 2 pessoas)</p>
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>Guia a sua disposição</p>
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>Fotos/Vídeos</p>
                                    <p className="flex items-center gap-2"><span className="text-primary"><FaCheck /></span>37 km de Paias Desertas</p>
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