import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Image from 'next/image';


interface IProductSliderProps {
    images: string[];
}

export default function ProductSlider({ images }: IProductSliderProps) {
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
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                }}
            >
                {images.map((image, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Image
                                alt='jacket 1 '
                                src={image}
                                width={300}
                                height={300}
                                style={{
                                    width: "100%",
                                    height: "100%"
                                }}
                            />
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    )
}
