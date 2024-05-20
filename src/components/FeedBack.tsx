import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import lys from '@/assets/lys2.webp'
import sara from '../assets/sara.webp'
import leticia from '@/assets/leticia.webp'
import allan from '@/assets/allan.webp'
import rodrigo from '@/assets/unnamed.webp'
import ronaldo from '@/assets/Ronaldo.webp'
import Shaquiria from '@/assets/Shaquiria.webp'
import janine from '@/assets/Janine.webp'
import Meyre from "@/assets/Meyre.webp"
import wilton from "@/assets/Wilton.webp"
import MariaFigueirosa from "@/assets/MariaFigueirosa.webp"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export function FeedBack() {

    useEffect(() => {
        AOS.init()
    }, [])

    return (

        <div className="bg-slate-100 px-5 py-10 w-full flex justify-center">
            <div className="max-w-[1100px] flex justify-center">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-bold text-4xl text-center text-slate-800" data-aos="fade-right" data-aos-duration="1000">O que nossos clientes dizem:</h1>
                    <p className="text-center mb-10 text-slate-500 flex items-center gap-2 justify-center" data-aos="fade-right" data-aos-duration="1000">Arraste pro lado para ver mais <FaArrowRight /></p>
                    <div className="flex justify-center">
                        <Carousel className="w-[300px] md:hidden">
                            <CarouselContent>

                                <CarouselItem>
                                    <Card className="h-[500px] flex flex-col justify-between">
                                        <CardHeader>
                                            <CardTitle className="text-base">
                                                <div className="w-20">
                                                    <img src="google.webp" alt="logo do google" />
                                                </div>
                                                Os caras são fera demais! Senti muita segurança pelo trajeto que fazem. O caminho é lindo e o guia tira excelentes fotos! Esse passeio é obrigatório em BF e o pessoal é especialista em trabalhar bem. Minha experiência foi excepcional</CardTitle>
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
                                                <AvatarImage src={rodrigo} alt="Foto de perfil pessoal" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <p className="italic">Rodrigo Damasceno</p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>

                                <CarouselItem>
                                    <Card className="h-[500px] flex flex-col justify-between">
                                        <CardHeader>
                                            <CardTitle className="text-base">
                                                <div className="w-20">
                                                    <img src="google.webp" alt="logo do google" />
                                                </div>
                                                Incrível!
                                                Sempre quis fazer esse passeio. Amei tanto que repeti, e repetiria a dose mil vezes …
                                                Sem contar que fizemos o passeio com o Júlio, menino bom, atencioso, simpático e nos deixou super a vontade. Além de ser nosso melhor fotografo rs
                                                INCRÍVEL! 🥰🏝️</CardTitle>
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
                                                <AvatarImage src={janine} alt="Foto de perfil pessoal" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <p className="italic">Janine Bernardino</p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>

                                <CarouselItem>
                                    <Card className="h-[500px] flex flex-col justify-between">
                                        <CardHeader>
                                            <CardTitle className="text-base">
                                                <div className="w-20">
                                                    <img src="google.webp" alt="logo do google" />
                                                </div>
                                                Melhor experiência possível, um passeio incrível que já fiz três vezes, e vou continuar fazendo 😍👏🏼</CardTitle>
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
                                                <AvatarImage src={Meyre} alt="Foto de perfil pessoal" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <p className="italic">Meyre Andrade</p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>

                                <CarouselItem>
                                    <Card className="h-[500px] flex flex-col justify-between">
                                        <CardHeader>
                                            <CardTitle className="text-base">
                                                <div className="w-20">
                                                    <img src="google.webp" alt="logo do google" />
                                                </div>
                                                Boa tarde,
                                                Experiência excelente, tanto o João como o Júlio são muitos atenciosos e competentes, vou voltar com certeza assim que puder, sou de Recife e gosto muito dos serviços deles, já indiquei e indico sempre.</CardTitle>
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
                                                <AvatarImage src={wilton} alt="Foto de perfil pessoal" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <p className="italic">Wilton Guedes</p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>

                                <CarouselItem>
                                    <Card className="h-[500px] flex flex-col justify-between">
                                        <CardHeader>
                                            <CardTitle className="text-base">
                                                <div className="w-20">
                                                    <img src="google.webp" alt="logo do google" />
                                                </div>
                                                Passeio maravilhoso. Voltarei com certeza! Equipe muito organizada e prestativa. Alugamos quadriciclos e fomos sendo guiados, fazendo o passeio a beira mar. Julio, o guia nos acompanhou em todo o trajeto e nos deixou bem a vontade.
                                                O famoso espetinho de lagosta é realmente maravilhoso.
                                                Indico muito a Baía Formosa Quadriciclos para fazer este passeio com segurança.</CardTitle>
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
                                                <AvatarImage src={MariaFigueirosa} alt="Foto de perfil pessoal" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <p className="italic">Maria Carolina Figueiroa</p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>

                                <CarouselItem>
                                    <Card className="h-[500px] flex flex-col justify-between">
                                        <CardHeader>
                                            <CardTitle className="text-base">
                                                <div className="w-20">
                                                    <img src="google.webp" alt="logo do google" />
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
                                                <AvatarImage src={lys} alt="Foto de perfil pessoal" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <p className="italic">Lys Anacleto</p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>

                                <CarouselItem>
                                    <Card className="h-[500px] flex flex-col justify-between">
                                        <CardHeader>
                                            <CardTitle className="text-base">
                                                <div className="w-20">
                                                    <img src="google.webp" alt="logo do google" />
                                                </div>
                                                <p>Com toda certeza o melhor passeio que já fiz, mostrando a beleza de Baía Formosa e com um profissional que tornou a experiência ainda mais incrível! Grata demais por cada momento, fiquei ainda mais apaixonada por esse lugar.🧡🧡🧡🧡 …</p>
                                            </CardTitle>
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
                                                <AvatarImage src={sara} alt="Foto de perfil pessoal" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <p className="italic">Sara Do Nascimento Muniz</p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>

                                <CarouselItem>
                                    <Card className="h-[500px] flex flex-col justify-between">
                                        <CardHeader>
                                            <CardTitle className="text-base">
                                                <div className="w-20">
                                                    <img src="google.webp" alt="logo do google" />
                                                </div>
                                                Excelente opção de passeios de quadriciclos em Baia Formosa.
                                                Ótimos profissionais e veículos, a ave tira vale muito a pena.</CardTitle>
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
                                                <AvatarImage src={allan} alt="Foto de perfil pessoal" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <p className="italic">Allan Nobre</p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>

                                <CarouselItem>
                                    <Card className="h-[500px] flex flex-col justify-between">
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
                                                <AvatarImage src={leticia} alt="Foto de perfil pessoal" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <p className="italic">Letícia Renovato</p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>

                                <CarouselItem>
                                    <Card className="h-[500px] flex flex-col justify-between">
                                        <CardHeader>
                                            <CardTitle className="text-base">
                                                <div className="w-20">
                                                    <img src="google.webp" alt="logo do google" />
                                                </div>
                                                O passeio é completo, um dos melhores do Rio Grande do Norte, eu acho que seja o melhor. Praia perfeita, aquela faixa de areia extensa, passeio super tranquilo, sem falar dos guias, altamente capacitados e sabem o que fazem. Foi o passeio!!!</CardTitle>
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
                                                <AvatarImage src={ronaldo} alt="Foto de perfil pessoal" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <p className="italic">Ronaldo Jota</p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>

                                <CarouselItem>
                                    <Card className="h-[500px] flex flex-col justify-between">
                                        <CardHeader>
                                            <CardTitle className="text-base">
                                                <div className="w-20">
                                                    <img src="google.webp" alt="logo do google" />
                                                </div>
                                                Passeios incríveis e maravilhosos conhecendo lugares encantados em baía formosa a empresa presta um trabalho de responsabilidade e competência super indico .</CardTitle>
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
                                                <AvatarImage src={Shaquiria} alt="Foto de perfil pessoal" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <p className="italic">Shaquiria Silva</p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>

                            </CarouselContent>
                        </Carousel>
                    </div>

                    {/* FeedBack Desktop*/}
                    <div className="hidden md:block">
                        <div className="flex justify-center items-center px-5" >
                            <Carousel className="w-[700px]">
                                <CarouselContent >

                                    <CarouselItem>
                                        <Card className="h-[300px] flex flex-col justify-between">
                                            <CardHeader>
                                                <CardTitle className="text-base">
                                                    <div className="w-20">
                                                        <img src="google.webp" alt="logo do google" />
                                                    </div>
                                                    Os caras são fera demais! Senti muita segurança pelo trajeto que fazem. O caminho é lindo e o guia tira excelentes fotos! Esse passeio é obrigatório em BF e o pessoal é especialista em trabalhar bem. Minha experiência foi excepcional</CardTitle>
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
                                                    <AvatarImage src={rodrigo} alt="Foto de perfil pessoal" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <p className="italic">Rodrigo Damasceno</p>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>

                                    <CarouselItem>
                                        <Card className="h-[300px] flex flex-col justify-between">
                                            <CardHeader>
                                                <CardTitle className="text-base">
                                                    <div className="w-20">
                                                        <img src="google.webp" alt="logo do google" />
                                                    </div>
                                                    Incrível!
                                                    Sempre quis fazer esse passeio. Amei tanto que repeti, e repetiria a dose mil vezes …
                                                    Sem contar que fizemos o passeio com o Júlio, menino bom, atencioso, simpático e nos deixou super a vontade. Além de ser nosso melhor fotografo rs
                                                    INCRÍVEL! 🥰🏝️</CardTitle>
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
                                                    <AvatarImage src={janine} alt="Foto de perfil pessoal" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <p className="italic">Janine Bernardino</p>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>

                                    <CarouselItem>
                                        <Card className="h-[300px] flex flex-col justify-between">
                                            <CardHeader>
                                                <CardTitle className="text-base">
                                                    <div className="w-20">
                                                        <img src="google.webp" alt="logo do google" />
                                                    </div>
                                                    Melhor experiência possível, um passeio incrível que já fiz três vezes, e vou continuar fazendo 😍👏🏼</CardTitle>
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
                                                    <AvatarImage src={Meyre} alt="Foto de perfil pessoal" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <p className="italic">Meyre Andrade</p>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>

                                    <CarouselItem>
                                        <Card className="h-[300px] flex flex-col justify-between">
                                            <CardHeader>
                                                <CardTitle className="text-base">
                                                    <div className="w-20">
                                                        <img src="google.webp" alt="logo do google" />
                                                    </div>
                                                    Boa tarde,
                                                    Experiência excelente, tanto o João como o Júlio são muitos atenciosos e competentes, vou voltar com certeza assim que puder, sou de Recife e gosto muito dos serviços deles, já indiquei e indico sempre.</CardTitle>
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
                                                    <AvatarImage src={wilton} alt="Foto de perfil pessoal" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <p className="italic">Wilton Guedes</p>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>

                                    <CarouselItem>
                                        <Card className="h-[300px] flex flex-col justify-between">
                                            <CardHeader>
                                                <CardTitle className="text-base">
                                                    <div className="w-20">
                                                        <img src="google.webp" alt="logo do google" />
                                                    </div>
                                                    Passeio maravilhoso. Voltarei com certeza! Equipe muito organizada e prestativa. Alugamos quadriciclos e fomos sendo guiados, fazendo o passeio a beira mar. Julio, o guia nos acompanhou em todo o trajeto e nos deixou bem a vontade.
                                                    O famoso espetinho de lagosta é realmente maravilhoso.
                                                    Indico muito a Baía Formosa Quadriciclos para fazer este passeio com segurança.</CardTitle>
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
                                                    <AvatarImage src={MariaFigueirosa} alt="Foto de perfil pessoal" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <p className="italic">Maria Carolina Figueiroa</p>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>

                                    <CarouselItem >
                                        <Card className="h-[300px] flex flex-col justify-between">
                                            <CardHeader>
                                                <CardTitle className="text-base">
                                                    <div className="w-20">
                                                        <img src="google.webp" alt="logo do google" />
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
                                                    <AvatarImage src={lys} alt="Foto de perfil pessoal" />
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
                                                        <img src="google.webp" alt="logo do google" />
                                                    </div>
                                                    <p>Com toda certeza o melhor passeio que já fiz, mostrando a beleza de Baía Formosa e com um profissional que tornou a experiência ainda mais incrível! Grata demais por cada momento, fiquei ainda mais apaixonada por esse lugar.🧡🧡🧡🧡 …</p>
                                                </CardTitle>
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
                                                    <AvatarImage src={sara} alt="Foto de perfil pessoal" />
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
                                                        <img src="google.webp" alt="logo do google" />
                                                    </div>
                                                    Excelente opção de passeios de quadriciclos em Baia Formosa.
                                                    Ótimos profissionais e veículos, a ave tira vale muito a pena.</CardTitle>
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
                                                    <AvatarImage src={allan} alt="Foto de perfil pessoal" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <p className="italic">Allan Nobre</p>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>

                                    <CarouselItem>
                                        <Card className="h-[300px] flex flex-col justify-between">
                                            <CardHeader>
                                                <CardTitle className="text-base">
                                                    <div className="w-20">
                                                        <img src="google.webp" alt="logo do google" />
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
                                                    <AvatarImage src={leticia} alt="Foto de perfil pessoal" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <p className="italic">Letícia Renovato</p>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>

                                    <CarouselItem>
                                        <Card className="h-[300px] flex flex-col justify-between">
                                            <CardHeader>
                                                <CardTitle className="text-base">
                                                    <div className="w-20">
                                                        <img src="google.webp" alt="logo do google" />
                                                    </div>
                                                    O passeio é completo, um dos melhores do Rio Grande do Norte, eu acho que seja o melhor. Praia perfeita, aquela faixa de areia extensa, passeio super tranquilo, sem falar dos guias, altamente capacitados e sabem o que fazem. Foi o passeio!!!</CardTitle>
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
                                                    <AvatarImage src={ronaldo} alt="Foto de perfil pessoal" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <p className="italic">Rodnaldo Jota</p>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>

                                    <CarouselItem>
                                        <Card className="h-[300px] flex flex-col justify-between">
                                            <CardHeader>
                                                <CardTitle className="text-base">
                                                    <div className="w-20">
                                                        <img src="google.webp" alt="logo do google" />
                                                    </div>
                                                    Passeios incríveis e maravilhosos conhecendo lugares encantados em baía formosa a empresa presta um trabalho de responsabilidade e competência super indico .</CardTitle>
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
                                                    <AvatarImage src={Shaquiria} alt="Foto de perfil pessoal" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <p className="italic">Shaquiria Silva</p>
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
                        <Link to='https://www.google.com/maps/place/Passeios+em+Ba%C3%ADa+Formosa+de+Quadriciclo+e+Buggy-+Ba%C3%ADa+Formosa+tour/@-6.3694259,-35.0027239,21z/data=!4m8!3m7!1s0x7b29d1999773fc5:0x9dc64592cc02eb0!8m2!3d-6.3694837!4d-35.0027684!9m1!1b1!16s%2Fg%2F11fm3wgqvd?entry=ttu' target="_blank">Veja nossas avaliações aqui</Link>
                    </Button>
                </div>
            </div>



        </div>
    )
}