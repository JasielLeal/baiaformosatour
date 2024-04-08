import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetDescription, SheetClose } from "./ui/sheet";
import { FaBars, FaBook, FaHome, FaInstagram, FaMapMarkedAlt, FaRocketchat, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaClipboardQuestion } from "react-icons/fa6";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { NavLink } from "./NavLink";
import { useEffect, useState } from "react";

export function NavMobile() {

    const [background, setBackground] = useState(true)

    useEffect(() => {
        function teste() {
            if (window.scrollY < 40) {
                setBackground(true)

            } else {
                setBackground(false)
            }
        }
        window.addEventListener('scroll', teste)
    }, [])



    return (
        <div className={background ? 'flex items-center justify-between fixed w-full px-5 py-2  z-50 lg:hidden transition-all ease-in-out' : 'flex items-center justify-between fixed w-full px-5 py-2  z-50 lg:hidden bg-white transition-all ease-in-out shadow'}>
            <div className="w-20">
                <Link to='/'><img src="logo.webp" alt="logo do Baia Formosa Tour" width={80} height={80} /></Link>
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant={'default'} size={'icon'} className={'flex justify-center text-white'}>
                        <FaBars />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetDescription className='mt-10'>
                            <div className='flex flex-col justify-between'>
                                <div>
                                    <div className='flex flex-col gap-5'>
                                        <h1 className='font-bold text-left'>Principal</h1>
                                        <SheetClose asChild>
                                            <Button className='w-full' variant={'outline'} asChild>
                                                <NavLink to='/' className='flex gap-2 items-center'><FaHome /> Home</NavLink>
                                            </Button>
                                        </SheetClose>

                                        <SheetClose asChild>
                                            <Button className='w-full' variant={'outline'} asChild>
                                                <NavLink to='/sobre' className='flex gap-2 items-center'><FaBook /> Sobre nós</NavLink>
                                            </Button>
                                        </SheetClose>

                                        <SheetClose asChild>
                                            <Button className='w-full' variant={'outline'} asChild>
                                                <NavLink to='/pacotes' className='flex gap-2 items-center'><FaMapMarkedAlt /> Pacotes</NavLink>
                                            </Button>
                                        </SheetClose>

                                        <SheetClose asChild>
                                            <Button asChild className='w-full' variant={'outline'} >
                                                <NavLink to='/duvidas' className='flex gap-2 items-center'><FaClipboardQuestion /> Dúvidas</NavLink>
                                            </Button>
                                        </SheetClose>
                                    </div>
                                    <div className='flex flex-col gap-3 mt-10 '>
                                        <div>
                                            <h1 className='font-bold text-left mb-2'>Contatos</h1>
                                            <div className='flex flex-col gap-2'>
                                                <Button className='w-full' variant={'secondary'} asChild>
                                                    <Link to='https://api.whatsapp.com/send/?phone=5584994511101&text=Ol%C3%A1%21+Gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+passeio+de+Quadriciclo+%EF%BF%BD%EF%BF%BD&type=phone_number&app_absent=0' className='flex gap-2 items-center' target='_blank'><MdOutlineQuestionAnswer /> Fale Conosco</Link>
                                                </Button>
                                                <Button className='w-full' variant={'default'} asChild>
                                                    <Link to='https://api.whatsapp.com/send/?phone=5584994511101&text=Ol%C3%A1%21+Gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+passeio+de+Quadriciclo+%EF%BF%BD%EF%BF%BD&type=phone_number&app_absent=0' className='flex gap-2 items-center' target='_blank'><FaRocketchat /> Realizar Agendamento</Link>
                                                </Button>
                                            </div>
                                        </div>

                                        <div>
                                            <h1 className='font-bold text-left mb-2'>Redes Sociais</h1>
                                            <div className='flex flex-col gap-3'>
                                                <Button className='w-full' variant={'secondary'} asChild>
                                                    <Link to='https://www.instagram.com/baiaformosatour/' className='flex gap-2 items-center text-left' target='_blank' aria-label="Botão de ir para o instagram"><FaInstagram /> Instagram</Link>
                                                </Button>
                                                <Button className='w-full' variant={'secondary'} asChild>
                                                    <Link to='https://www.tiktok.com/@baiaformosatour?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1' className='flex gap-2 items-center text-left' target='_blank' aria-label="Botão de ir para o Tiktok"><FaTiktok /> TikTok</Link>
                                                </Button>
                                                <Button className='w-full' variant={'secondary'} asChild>
                                                    <Link to='https://www.youtube.com/@baiaformosatour' className='flex gap-2 items-center text-left' target='_blank' aria-label="Botão de ir para o Youtube"><FaYoutube /> Youtube</Link>
                                                </Button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}