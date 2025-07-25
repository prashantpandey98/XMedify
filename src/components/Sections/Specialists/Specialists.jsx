import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../../assets/lesley.png'
import img2 from '../../../assets/ahmad.png'
import img3 from '../../../assets/heena.png'
import img4 from '../../../assets/ankur.png'
import img5 from '../../../assets/ahmad-stevens.png'
import SpecialistCard from './SpecialistCard'
import { Autoplay, Pagination } from 'swiper/modules';

export default function Specialists() {

    const specialist_data = [
        { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
        { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
        { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
        { img: img4, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
        { img: img5, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' },
        { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
        { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
        { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
        { img: img4, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
        { img: img5, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' }
    ]

    return (
        <Box py={6} id="find-doctors">
            <Typography variant="h2" textAlign='center' mb={4} px={2}>
                Our Medical Specialist
            </Typography>
            <Swiper
                slidesPerView={1}
                spaceBetween={24}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                pagination={{
                    clickable: true,
                    dynamicBullets: false,
                }}
                breakpoints={{
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                        centeredSlides: false
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                        centeredSlides: false
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                        centeredSlides: false
                    }
                }}
                className="specialists-carousel"
            >
                {specialist_data.map((doc, index) => (
                    <SwiperSlide key={index}>
                        <SpecialistCard
                            img={doc.img}
                            title={doc.title}
                            designation={doc.designation} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}