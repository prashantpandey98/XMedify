import { Box, Container } from "@mui/material";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import offer1 from '../../../assets/offer1.png'
import offer2 from '../../../assets/offer2.png'

export default function Offers() {
    return (
        <Box py={6}>
            <Container maxWidth='xl'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={24}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                        dynamicBullets: false,
                    }}
                    breakpoints={{
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 24
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 24
                        }
                    }}
                    className="offers-carousel"
                >
                    <SwiperSlide>
                        <Box
                            component={'img'}
                            src={offer1}
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '12px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box
                            component={'img'}
                            src={offer2}
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '12px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box
                            component={'img'}
                            src={offer1}
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '12px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box
                            component={'img'}
                            src={offer2}
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '12px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box
                            component={'img'}
                            src={offer1}
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '12px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box
                            component={'img'}
                            src={offer2}
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '12px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }}
                        />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </Box>
    )
}