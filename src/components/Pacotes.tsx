
import combo1 from '@/assets/combo1.jpg'
export function Pacotes() {
    return (
        <>
            <div className="flex justify-center px-5 py-10">
                <div className="max-w-[1100px]">
                    <div className="">
                        <h1 className="font-bold text-4xl text-center text-slate-800">Nossos pacotes</h1>
                        <p className='text-center font-medium mb-10 text-slate-500'>Conheça agora todos os pacotes que a nossa empres oferece</p>
                        <div className="w-[300px]rounded-xl overflow-hidden shadow">
                            <div className=''>
                                <img src={combo1} alt='passeio completo' height='40px'/> 
                            </div>
                            <div>
                                <h1>a</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}