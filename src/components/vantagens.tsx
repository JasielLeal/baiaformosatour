import { MdOutlineSecurity } from "react-icons/md";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaStar } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";

export function Vantagens() {
    return (
        <>
            <div className="mt-20 flex flex-col gap-5 lg:grid grid-cols-3">
                <Card >
                    <CardHeader>
                        <CardTitle>
                            <div className="bg-secondary text-3xl p-2 rounded-md flex w-[50px] justify-center text-primary">
                                <FaStar />
                            </div>
                        </CardTitle>
                        <CardDescription>Experiência</CardDescription>
                    </CardHeader>
                    <CardContent className="font-semibold text-xl">
                        <p>Esteja pronto para uma experiência emocionante e memorável que ficará gravada para sempre em sua memória.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <div className="bg-secondary text-3xl p-2 rounded-md flex w-[50px] justify-center text-primary">
                                <MdOutlineSecurity />
                            </div>
                        </CardTitle>
                        <CardDescription>Segurança</CardDescription>
                    </CardHeader>
                    <CardContent className="font-semibold text-xl">
                        <p>Nossa equipe é formada por profissionais capacitados, experientes e altamente qualificados</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <div className="bg-secondary text-3xl p-2 rounded-md flex w-[50px] justify-center text-primary">
                                <VscFeedback />
                            </div>
                        </CardTitle>
                        <CardDescription>FeedBack</CardDescription>
                    </CardHeader>
                    <CardContent className="font-semibold text-xl">
                        <p>Nossa avaliação é a mais elevada em toda a cidade, destacando nossa excelência profissional</p>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}