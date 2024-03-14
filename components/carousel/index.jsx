import { Container, Content } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

export function Carousel({children}) {
    return (
        <Container>
            <Content>
                <swiper
                grabCursor={true}
                loop={true}
                loopFillGroupWithBlank={true}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        "@1.00": {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        "@1.20": {
                            slidesPerView: 4,
                            spaceBetween: 130,
                        },
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                  <SwiperSlide>{children}</SwiperSlide>
                </swiper>
            </Content>
        </Container>
    )
}