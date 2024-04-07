import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export function Page404() {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="px-5 flex flex-col items-center">
                <h2 className="font-medium text-primary">404</h2>
                <h1 className="font-semibold text-slate-800 text-xl lg:text-3xl">Página não encontrada</h1>
                <p className="text-slate-600 font-normal text-center lg:text-xl">Lamentatmos, mas não conseguimos encontra a página que procura.</p>
                <Button asChild className="mt-7">
                    <Link to='/'>
                        Volte a Home
                    </Link>
                </Button>
            </div>
        </div>
    )
}