import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { FaRocketchat } from "react-icons/fa";
import { NavLink } from "./NavLink";
import { useEffect, useState } from "react";


export function NavBar() {

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
        <>
            <div className={background ? 'w-full fixed py-2 items-center justify-around px-5 z-50 hidden lg:flex text-slate-400 ' : 'bg-white w-full fixed border-b py-2 items-center justify-around px-5 z-50 hidden lg:flex transition-all '}>
                <div className="w-20">
                    <Link to='/'>
                        <img src="logo.webp" alt="logo do site" width={80} height={80} />
                    </Link>
                </div>
                <ul className='flex gap-10 items-center'>
                    <li className={background ? 'font-semibold hover:text-primary ' : 'font-semibold hover:text-primary transition-all'}>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className='font-semibold hover:text-primary'>
                        <NavLink to='/sobre'>Sobre</NavLink>
                    </li>
                    <li className='font-semibold hover:text-primary'>
                        <NavLink to='/pacotes'>Pacotes</NavLink>
                    </li>
                    <li className='font-semibold hover:text-primary'>
                        <NavLink to='/duvidas'>Dúvidas</NavLink>
                    </li>
                    <Button className='w-full' variant={'default'} asChild>
                        <Link to='https://api.whatsapp.com/send/?phone=5584994511101&text=Ol%C3%A1%21+Gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+passeio+de+Quadriciclo+%EF%BF%BD%EF%BF%BD&type=phone_number&app_absent=0' className='flex gap-2 items-center' target='_blank'><FaRocketchat /> Realizar Agendamento</Link>
                    </Button>
                </ul>
            </div>
        </>
    )
}