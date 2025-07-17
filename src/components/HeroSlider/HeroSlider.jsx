import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img from '../../assets/home.webp'
import { Box, Stack, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HeroSlider() {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            style={{
                paddingBottom: '20px'
            }}
        >
            <SwiperSlide>
                <Stack
                    direction={{ xs: 'column', md: "row" }}
                    spacing={{ xs: 4, md: 6 }}
                    alignItems="center"
                    pt={{ xs: 2, md: 3 }}
                    px={{ xs: 1, md: 0 }}
                >
                    <Box flex={1}>
                        <Typography variant='h3' component='h1' mb={1}>
                            Skip the travel! Find Online
                        </Typography>
                        <Typography variant='h1' component='h1' mb={2}>
                            Medical <span style={{ color: '#2AA7FF' }}>Centers</span>
                        </Typography>
                        <Typography
                            color="#5C6169"
                            fontSize={{ xs: 16, md: 20 }}
                            mb={4}
                            lineHeight={1.6}
                        >
                            Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                        </Typography>
                        <Link to='/search' style={{ textDecoration: 'none' }}>
                            <Button
                                variant='contained'
                                size="large"
                                disableElevation
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '16px',
                                    fontWeight: 600
                                }}
                            >
                                Find Centers
                            </Button>
                        </Link>
                    </Box>
                    <Box
                        component={'img'}
                        src={img}
                        sx={{
                            width: { xs: '100%', md: "50%" },
                            height: 'auto',
                            maxWidth: '500px'
                        }}
                    />
                </Stack>
            </SwiperSlide>
        </Swiper>
    )
}