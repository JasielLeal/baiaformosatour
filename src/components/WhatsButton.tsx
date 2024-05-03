import { FaWhatsapp } from "react-icons/fa";

import { Link } from "react-router-dom";

export function WhatsButton() {
    return (
        <div className="fixed z-50 text-white right-3 bottom-10 md:right-14 md:bottom-5">
            <Link to='https://api.whatsapp.com/send?phone=5584994511101&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20passeio%20de%20Quadriciclo.' target="_blank" className="flex items-center gap-2 font-medium p-3 bg-emerald-500 rounded-full  hover:bg-emerald-700  transition-colors ease-linear" >
                <FaWhatsapp className="text-3xl"/>
            </Link>
        </div>
    )
}