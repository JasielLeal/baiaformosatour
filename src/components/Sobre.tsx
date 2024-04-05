import { Button } from "./ui/button";


export function Sobre() {
    return (
        <div className="px-5 py-32 flex justify-center" id="sobre">
            <div className="w-[1100px]">
                <div className="md:grid grid-cols-2 items-center w-full">
                    <div>
                        <h1 className="font-bold text-3xl mb-2 text-slate-800">+ de 2130 Passeios já realizados</h1>
                        <p className="font-medium mb-2 text-slate-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quos veritatis quo consequuntur magni iste repellendus cupiditate officia enim dicta officiis numquam laborum itaque laudantium, cum assumenda vitae sint culpa. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nostrum a, odit eveniet rerum quas? Blanditiis, debitis impedit fuga voluptas mollitia optio voluptatum. Necessitatibus aperiam suscipit eos obcaecati, animi quae.</p>
                        <Button className="w-full flex justify-center">Clique para conhecer a gente</Button>
                    </div>
                    <div className="flex mt-10 md:justify-end justify-center">
                        <img src="logo.png" alt="logo do baía formosa tour" width={300}/>
                    </div>
                </div>
            </div>
        </div>
    )
}