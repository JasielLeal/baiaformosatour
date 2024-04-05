import { FaWhatsapp } from "react-icons/fa";

export function Faixa(){
    return(
        <>
            <div className="flex justify-center items-center">
                <div className="max-w-[1200px] bg-primary  p-5 rounded-lg shadow-md">
                    <div className="grid grid-cols-4 ">
                        <div className="flex items-center gap-4">
                            <FaWhatsapp className="text-3xl"/>
                            <div>
                                <h1 className="font-semibold">Atendimento humanizado</h1>
                                <p>Fale conosco diariamente das 08:00 as 22:00</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaWhatsapp className="text-3xl"/>
                            <div>
                                <h1 className="font-semibold">Atendimento humanizado</h1>
                                <p>Fale conosco diariamente das 08:00 as 22:00</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaWhatsapp className="text-3xl"/>
                            <div>
                                <h1 className="font-semibold">Atendimento humanizado</h1>
                                <p>Fale conosco diariamente das 08:00 as 22:00</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaWhatsapp className="text-3xl"/>
                            <div>
                                <h1 className="font-semibold">Atendimento humanizado</h1>
                                <p>Fale conosco diariamente das 08:00 as 22:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}