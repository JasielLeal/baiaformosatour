
import logo from '/logo.webp'
import { Button } from "./ui/button";

import google from '/google.webp'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"

import cadastur from '/cadastur.webp'
import certificado from '/certificado.webp'
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
export function Footer() {
    return (
        <div className="px-5 pt-10 bg-[#17171a] flex-col justify-center items-center">
            <div className="flex justify-center flex-col items-center">
                <div className="">
                    <div className="md:grid grid-cols-2 gap-10 lg:grid-cols-4 pb-10 max-w-[1100px]"> 
                        <div>
                            <img src={logo} alt="logo do site" width={100} height={100}/>
                            <h1 className="text-input font-medium text-lg mt-2">Atuando desde 2019, oferecendo o mais alto padrão de serviços turísticos em Baía Formosa.</h1>
                        </div>

                        <div className="mt-20 lg:mt-10">
                            <h1 className="font-semibold text-accent uppercase">Serviços prestados</h1>
                            <p className="text-input text-medium"> - Passeio de quadricículos</p>
                            <p className="text-input text-medium">- Passeio de buggy</p>
                            <p className="text-input text-medium"> - Passeio de barco</p>
                        </div>

                        <div className="mt-10 pb-10">
                            <h1 className="font-semibold text-accent uppercase">Contate-nos</h1>
                            <p className="text-input text-medium">Contato@baiaformosatour.com.br</p>
                            <p className="text-accent">CNPJ: 52.448.765/0001-92</p>
                            <h1 className="font-semibold text-accent uppercase mt-5">Siga-nos</h1>
                            <div className="flex gap-3 mt-2">
                                <Button asChild>
                                    <Link to='https://www.instagram.com/baiaformosatour/' target="_blank" >
                                        <FaInstagram />
                                    </Link>
                                </Button>
                                <Button asChild>
                                    <Link to='https://www.tiktok.com/@baiaformosatour?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1' target="_blank">
                                        <FaTiktok />
                                    </Link>
                                </Button>
                                <Button asChild>
                                    <Link to='https://www.youtube.com/@baiaformosatour' target="_blank">
                                        <FaYoutube />
                                    </Link>
                                </Button>
                            </div>


                        </div>

                        <div className="w-full mt-10">
                            <h1 className="font-semibold text-accent uppercase">Informações</h1>

                            <div className="flex flex-col pb-10 justify-start">
                                <Button variant={'link'} asChild className='flex justify-start'>
                                    <Link to='/termos' >
                                        - Termos de serviço
                                    </Link>
                                </Button>
                                <Button variant={'link'} asChild className='flex justify-start'>
                                    <Link to='/termos' target="_blank" >
                                        - Termos de contrato
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-5 mb-10 items-center">
                        <div>
                            <Link to='https://www.google.com/maps/place/Passeios+em+Ba%C3%ADa+Formosa+de+Quadriciclo+e+Buggy-+Ba%C3%ADa+Formosa+tour/@-6.3694837,-35.0027684,17z/data=!4m14!1m7!3m6!1s0x7b29d1999773fc5:0x9dc64592cc02eb0!2sPasseios+em+Ba%C3%ADa+Formosa+de+Quadriciclo+e+Buggy-+Ba%C3%ADa+Formosa+tour!8m2!3d-6.3694837!4d-35.0027684!16s%2Fg%2F11fm3wgqvd!3m5!1s0x7b29d1999773fc5:0x9dc64592cc02eb0!8m2!3d-6.3694837!4d-35.0027684!16s%2Fg%2F11fm3wgqvd?entry=ttu' className="flex flex-col " target="_blank">
                                <img src={google} alt="logo do google" width={100} height={100}/>
                            </Link>
                        </div>
                        <div className="">
                            <Dialog>
                                <DialogTrigger asChild className="cursor-pointer">
                                    <img src={cadastur} alt="logo do cadastur" width={170} height={170}/>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogDescription>
                                            <img src={certificado} alt="logo do cadastur" />
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </div>

                    </div>
                    
                </div>
                <div className="flex justify-center text-accent pt-5 pb-5 border-[#ffffff21] border-t bg-[#17171a] font-semibold items-center w-full">
                    <h1 className="text-center">©BaíaFormosaTour 2024. Todos os direitos reservados</h1>
                </div>
            </div>
        </div>
    )
}