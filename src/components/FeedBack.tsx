import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import lys from '@/assets/lys2.png'



export function FeedBack() {
    return (

        <div className="bg-slate-100 px-5 py-10 w-full flex justify-center">
            <div className="max-w-[1100px] flex justify-center">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-bold text-4xl text-center text-slate-800">O que nossos clientes dizem:</h1>
                    <p className="text-center mb-10 text-slate-500 flex items-center gap-2 justify-center">Arraste pro lado para ver mais <FaArrowRight /></p>
                    <div className="flex justify-center">
                        <Carousel className="w-[300px] md:hidden">
                            <CarouselContent>

                                <CarouselItem>
                                    <Card className="h-[400px] flex flex-col justify-between">
                                        <CardHeader>
                                            <CardTitle className="text-base">
                                                <div className="w-20">
                                                    <img src="google.png" alt="logo do google" />
                                                </div>
                                                Experiência magnífica, um passeio que sem dúvidas, vale muitooo a pena, com as melhores paisagem (uma mais linda que a outra), com o guia que deixa o passeio melhor ainda, muito prestativo, que mostra cada lugares com excelência. Uma empresa que garante vivências únicas!!</CardTitle>
                                            <CardDescription className="flex text-yellow-400">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex items-center gap-4">
                                            <Avatar >
                                                <AvatarImage src={lys} className="obje"/>
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <p className="italic">Lys Anacleto</p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>

                                <CarouselItem>
                                    <Card className="h-[400px] flex flex-col justify-between">
                                        <CardHeader>
                                            <CardTitle className="text-base">
                                                <div className="w-20">
                                                    <img src="google.png" alt="logo do google" />
                                                </div>
                                                Com toda certeza o melhor passeio que já fiz, mostrando a beleza de Baía Formosa e com um profissional que tornou a experiência ainda mais incrível! Grata demais por cada momento, fiquei ainda mais apaixonada por esse lugar.🧡🧡🧡🧡 …</CardTitle>
                                            <CardDescription className="flex text-yellow-400">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex items-center gap-4">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <p className="italic">Sara Do Nascimento Muniz</p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>

                                <CarouselItem>
                                    <Card className="h-[400px] flex flex-col justify-between">
                                        <CardHeader>
                                            <CardTitle className="text-base">
                                                <div className="w-20">
                                                    <img src="google.png" alt="logo do google" />
                                                </div>
                                                Passeio maravilhosoo, ponto de apoio para almoço que tinha uma comida muito saborosa tambem (Nativa). Com certeza irei repetir, obrigada a Julio por nos levar nesse passeio incrivel ❤️</CardTitle>
                                            <CardDescription className="flex text-yellow-400">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex gap-4 items-center">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <p className="italic">Letícia Renovato</p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    </div>

                    {/* FeedBack Desktop*/}
                    <div className="hidden md:block">
                        <div className="flex justify-center items-center px-5 ">
                            <Carousel className="w-[700px]">
                                <CarouselContent>
                                <CarouselItem>
                                    <Card className="h-[300px] flex flex-col justify-between">
                                        <CardHeader>
                                            <CardTitle className="text-base">
                                                <div className="w-20">
                                                    <img src="google.png" alt="logo do google" />
                                                </div>
                                                Experiência magnífica, um passeio que sem dúvidas, vale muitooo a pena, com as melhores paisagem (uma mais linda que a outra), com o guia que deixa o passeio melhor ainda, muito prestativo, que mostra cada lugares com excelência. Uma empresa que garante vivências únicas!!</CardTitle>
                                            <CardDescription className="flex text-yellow-400">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex items-center gap-4">
                                            <Avatar>
                                                <AvatarImage src={lys} />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <p className="italic">Lys Anacleto</p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>

                                <CarouselItem>
                                    <Card className="h-[300px] flex flex-col justify-between">
                                        <CardHeader>
                                            <CardTitle className="text-base">
                                                <div className="w-20">
                                                    <img src="google.png" alt="logo do google" />
                                                </div>
                                                Com toda certeza o melhor passeio que já fiz, mostrando a beleza de Baía Formosa e com um profissional que tornou a experiência ainda mais incrível! Grata demais por cada momento, fiquei ainda mais apaixonada por esse lugar.🧡🧡🧡🧡 …</CardTitle>
                                            <CardDescription className="flex text-yellow-400">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex items-center gap-4">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <p className="italic">Sara Do Nascimento Muniz</p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>

                                <CarouselItem>
                                    <Card className="h-[300px] flex flex-col justify-between">
                                        <CardHeader>
                                            <CardTitle className="text-base">
                                                <div className="w-20">
                                                    <img src="google.png" alt="logo do google" />
                                                </div>
                                                Passeio maravilhosoo, ponto de apoio para almoço que tinha uma comida muito saborosa tambem (Nativa). Com certeza irei repetir, obrigada a Julio por nos levar nesse passeio incrivel ❤️</CardTitle>
                                            <CardDescription className="flex text-yellow-400">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex gap-4 items-center">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <p className="italic">Letícia Renovato</p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                </CarouselContent>
                                <CarouselPrevious className="flex justify-center items-center" />
                                <CarouselNext className="flex justify-center items-center" />
                            </Carousel>

                        </div>
                    </div>

                    <Button variant={'default'} asChild className="mt-10">
                        <Link to='https://www.google.com/maps/place/Passeios+em+Ba%C3%ADa+Formosa+de+Quadriciclo+e+Buggy-+Ba%C3%ADa+Formosa+tour/@-6.3694837,-35.0027684,17z/data=!4m14!1m7!3m6!1s0x7b29d1999773fc5:0x9dc64592cc02eb0!2sPasseios+em+Ba%C3%ADa+Formosa+de+Quadriciclo+e+Buggy-+Ba%C3%ADa+Formosa+tour!8m2!3d-6.3694837!4d-35.0027684!16s%2Fg%2F11fm3wgqvd!3m5!1s0x7b29d1999773fc5:0x9dc64592cc02eb0!8m2!3d-6.3694837!4d-35.0027684!16s%2Fg%2F11fm3wgqvd?entry=ttu' target="_blank">Veja nossas avaliações aqui</Link>
                    </Button>
                </div>
            </div>



        </div>
    )
}