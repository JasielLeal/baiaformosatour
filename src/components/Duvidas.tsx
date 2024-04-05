import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"


export function Duvidas() {
    return (
        <div className="px-5 py-10 flex justify-center" id="duvidas">
            <div className="w-[1100px]">
                <h1 className="text-2xl font-bold mb-10 text-slate-800">Algumas das principais dúvidas</h1>

                <Accordion type="single" collapsible className="flex flex-col gap-4">
                    <AccordionItem value="Dúvida 1">
                        <AccordionTrigger>
                            Como funciona a reserva de Passeios em Baía Formosa/RN?</AccordionTrigger>
                        <AccordionContent>
                            A reserva na Baía Formosa Tour pode ser feita pelo WhatsApp. Serão solicitados alguns dados referentes a cada passeio, como horário, data, quantidade de adultos, quantidade de crianças, nome completo, CPF, e-mail, local de hospedagem e telefone para contato e Instagram.
                            Na maioria de nossos passeios, é cobrado um sinal de pagamento no ato da reserva, esse sinal gira em torno de 50% do valor total do passeio e serve para garantir sua vaga no dia. Vale lembrar que o valor enviado na reserva é automaticamente descontado do valor final do passeio.
                            Formas de pagamento no local: Pix, dinheiro ou cartão; Lembrando que no cartão ficará o valor sem desconto.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="Dúvida 2">
                        <AccordionTrigger>Nunca pilotei um quadriciclo, consigo fazer o passeio?</AccordionTrigger>
                        <AccordionContent>
                            Antes de começarmos o passeio de quadriciclo, nossa equipe altamente preparada e qualificada fornece as instruções sobre como operar o veículo da melhor forma possível.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="Dúvida 3">
                        <AccordionTrigger>É necessário CNH?</AccordionTrigger>
                        <AccordionContent>
                            Sim, é necessário portar CNH na categoria A ou B para poder realizar o passeio.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="Dúvida 4">
                        <AccordionTrigger>Tem parada para almoço?</AccordionTrigger>
                        <AccordionContent>
                            Temos sim. A parada para o almoço é feita em Sagi, onde encontram-se restaurantes maravilhosos beira-mar com uma culinária excelente.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="Dúvida 5">
                        <AccordionTrigger>Vai algum guia no passeio?</AccordionTrigger>
                        <AccordionContent>
                            Sim! Pode ficar tranquilo quanto a isso. Todo o roteiro é guiado por um guia credenciado que vai em uma moto na frente do comboio de quadriciclo orientando o trajeto e apresentando todo o roteiro para você.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="Dúvida 6">
                        <AccordionTrigger>O valor do passeio de quadriciclo é para duas pessoas?</AccordionTrigger>
                        <AccordionContent>
                            Sim, o valor é para duas pessoas, lembrando que o quadriciclo tem capacidade para duas pessoas.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="Dúvida 7">
                        <AccordionTrigger>Qual horário e rota conseguimos ver o pôr do sol?</AccordionTrigger>
                        <AccordionContent>
                            No último horário (16h) saímos na rota do pôr do sol, subimos a duna do Morro do Careca e admiramos o pôr do sol lá do alto do morro, com uma vista de tirar o fôlego para a praia do Bacupari.
                            <br />
                            <br />
                            O que preciso levar?
                            <br />
                            <br />
                            -Protetor solar<br />
                            -Roupas leves<br />
                            -Óculos de sol<br />
                            -Chapéu<br />
                            -Dinheiro em espécie (pois tem alguns locais que não aceitam Pix)
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="Dúvida 8">
                        <AccordionTrigger>Como funciona a política de cancelamento?</AccordionTrigger>
                        <AccordionContent>
                            -Cancelamento com até 10 dias de antecedência garante reembolso de 100% do valor pago no ato da reserva.<br />
                            -Cancelamentos entre 72h de antecedência garantem reembolso de 50% do valor pago.<br />
                            -Cancelamentos com menos de 48h de antecedência não têm reembolso.<br />
                            -Em casos de doenças, garantimos 100% de reembolso apenas com atestado médico.<br />
                            -Reservas realizadas no dia ou 1-4 dias antes do passeio também se encaixam na mesma política de cancelamento.<br />
                            Se no dia da atividade alguma condição climática ou qualquer outro motivo que coloque os participantes em risco impedir a operação das atividades, estas poderão ser canceladas, adaptadas ou reagendadas. Em caso de cancelamento por esse motivo, haverá reembolso do valor integral.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <div className="flex flex-col items-center mt-10">
                    <h1 className="text-xl font-bold mb-3 text-slate-800">Ainda está com dúvidas?</h1>
                    <Button className="px-8 flex justify-center" asChild>
                        <Link to='https://api.whatsapp.com/send/?phone=5584994511101&text=Ol%C3%A1%21+Gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+passeio+de+Quadriciclo+%EF%BF%BD%EF%BF%BD&type=phone_number&app_absent=0' target="_blank">Fale com a nossa equipe</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}