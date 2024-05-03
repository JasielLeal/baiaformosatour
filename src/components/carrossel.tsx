import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import  {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper/modules';
import img1 from '/viva.png'
import { Hero } from './Hero'


export function Carrosel(){
    return(
        <>
            <Swiper slidesPerView={1} pagination={{clickable: true}} modules={[Pagination]}>
                <SwiperSlide>
                    <Hero/>
                </SwiperSlide>
                <SwiperSlide className='flex items-center h-screen'>
                    <img src={img1} alt="pagina 2" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}