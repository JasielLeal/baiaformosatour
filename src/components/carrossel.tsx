import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
import img1 from '/viva.png'
import { Hero } from './Hero'
import bannerCelular from '/viaCelularV2.png'
import bannerTablet from '/viaTablet.png'

export function Carrosel() {
    return (
        <>
            <Swiper slidesPerView={1} pagination={{ clickable: true }} modules={[Pagination]}>
                <SwiperSlide>
                    <Hero />
                </SwiperSlide>
                <SwiperSlide className='flex items-center h-screen w-full'>
                    <img src={img1} alt="pagina 2" className='object-cover hidden lg:block h-screen w-full' />
                    <img src={bannerCelular} alt="pagina 2" className='object-cover h-screen object-bottom md:hidden' />
                    <img src={bannerTablet} alt="pagina 2" className='object-cover w-full h-screen hidden md:block lg:hidden' />
                </SwiperSlide>
            </Swiper>
        </>
    )
} ''