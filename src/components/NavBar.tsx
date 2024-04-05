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
                        <Link to='#home'>Home</Link>
                    </li>
                    <li className='font-semibold'>
                        <Link to='#sobre'>Sobre</Link>
                    </li>
                    <li className='font-semibold'>
                        <Link to='#pacotes'>Pacotes</Link>
                    </li>
                    <li className='font-semibold'>
                        <Link to='#duvidas'>Dúvidas</Link>
                    </li>
                    <Button className='w-full' variant={'default'} asChild>
                        <Link to='https://api.whatsapp.com/send/?phone=5584994511101&text=Ol%C3%A1%21+Gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+passeio+de+Quadriciclo+%EF%BF%BD%EF%BF%BD&type=phone_number&app_absent=0' className='flex gap-2 items-center' target='_blank'><FaRocketchat /> Realizar Agendamento</Link>
                    </Button>
                </ul>
            </div>
        </>
    )
}