// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import jacket from "../../../../assets/images/jacket.png";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import Image from 'next/image';


export default function ProductSlider() {
    return (
        <div
            style={{
                maxWidth: 500,
                minHeight: 500
            }}
        >
            <Swiper
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                }}
            >
                <SwiperSlide>
                    <Image
                        alt='jacket 1 '
                        src={jacket}
                        style={{
                            width: "100%",
                            height: "100%"
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        alt='jacket 1 '
                        src={jacket}
                        style={{
                            width: "100%",
                            height: "100%"
                        }}
                    />

                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        alt='jacket 1 '
                        src={jacket}
                        style={{
                            width: "100%",
                            height: "100%"
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        alt='jacket 1 '
                        src={jacket}
                        style={{
                            width: "100%",
                            height: "100%"
                        }}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
