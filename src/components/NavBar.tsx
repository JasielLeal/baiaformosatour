import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { FaRocketchat } from "react-icons/fa";


export function NavBar() {
    return (
        <>
            <div className='bg-white w-full fixed border-b py-2 items-center justify-around px-5 z-50 hidden lg:flex'>
                <div className="w-20">
                    <img src="logo.png" alt="logo do site"/>
                </div>
                <ul className='flex gap-10 items-center'>
                    <li className='font-semibold'>
                        <a href='#home'>Home</a>
                    </li>
                    <li className='font-semibold'>
                        <a href='#sobre'>Sobre</a>
                    </li>
                    <li className='font-semibold'>
                        <a href='#pacotes'>Pacotes</a>
                    </li>
                    <li className='font-semibold'>
                        <a href='#duvidas'>Dúvidas</a>
                    </li>
                    <Button className='w-full' variant={'default'} asChild>
                        <Link to='https://api.whatsapp.com/send/?phone=5584994511101&text=Ol%C3%A1%21+Gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+passeio+de+Quadriciclo+%EF%BF%BD%EF%BF%BD&type=phone_number&app_absent=0' className='flex gap-2 items-center' target='_blank'><FaRocketchat /> Realizar Agendamento</Link>
                    </Button>
                </ul>
            </div>
        </>
    )
}