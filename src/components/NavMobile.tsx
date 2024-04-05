import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetDescription, SheetClose } from "./ui/sheet";
import { FaBars, FaBook, FaHome, FaInstagram, FaMapMarkedAlt, FaRocketchat, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaClipboardQuestion } from "react-icons/fa6";
import { MdOutlineQuestionAnswer } from "react-icons/md";

export function NavMobile() {
    return (
        <div className='flex items-center justify-between fixed w-full px-5 py-2 bg-white border-b z-50 lg:hidden'>
            <div className="w-20">
                <img src="logo.png" alt="logo do Baia Formosa Tour" />
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant={'outline'} size={'icon'} className='flex justify-center'>
                        <FaBars />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetDescription className='mt-10'>
                            <div className='flex flex-col justify-between'>
                                <div>
                                    <div className='flex flex-col gap-3'>
                                        <h1 className='font-bold text-left'>Principal</h1>
                                        <SheetClose asChild>
                                            <Button className='w-full' variant={'outline'}>
                                                <a href='#home' className='flex gap-2 items-center'><FaHome /> Home</a>
                                            </Button>
                                        </SheetClose>

                                        <SheetClose asChild>
                                            <Button className='w-full' variant={'outline'}>
                                                <a href='#sobre' className='flex gap-2 items-center'><FaBook /> Sobre nós</a>
                                            </Button>
                                        </SheetClose>

                                        <SheetClose asChild>
                                            <Button className='w-full' variant={'outline'}>
                                                <a href='#pacotes' className='flex gap-2 items-center'><FaMapMarkedAlt /> Pacotes</a>
                                            </Button>
                                        </SheetClose>

                                        <SheetClose asChild>
                                            <Button className='w-full' variant={'outline'}>
                                                <a href='#duvidas' className='flex gap-2 items-center'><FaClipboardQuestion /> Dúvidas</a>
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
                                                    <Link to='https://www.instagram.com/baiaformosatour/' className='flex gap-2 items-center text-left' target='_blank'><FaInstagram /> Instagram</Link>
                                                </Button>
                                                <Button className='w-full' variant={'secondary'} asChild>
                                                    <Link to='https://www.tiktok.com/@baiaformosatour?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1' className='flex gap-2 items-center text-left' target='_blank'><FaTiktok /> TikTok</Link>
                                                </Button>
                                                <Button className='w-full' variant={'secondary'} asChild>
                                                    <Link to='https://www.youtube.com/@baiaformosatour' className='flex gap-2 items-center text-left' target='_blank'><FaYoutube /> Youtube</Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <SheetClose asChild>
                                <Link to='#sobre'>
                                    fechar
                                </Link>
                            </SheetClose>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}