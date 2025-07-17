import { Container, Stack, Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import icon from "../assets/tick.png";
import cta from "../assets/cta.png";
import SearchHospital from "../components/SearchHospital/SearchHospital";
import BookingModal from "../components/BookingModal/BookingModal";
import AutohideSnackbar from "../components/AutohideSnackbar/AutohideSnackbar";
import NavBar from "../components/NavBar/NavBar";

export default function Search() {
  const [seachParams /*setSearchParams*/] = useSearchParams();
  const [hospitals, setHospitals] = useState([]);
  const [state, setState] = useState(seachParams.get("state"));
  const [city, setCity] = useState(seachParams.get("city"));
  const availableSlots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //API to fetch hospitals based on state and city selection
  useEffect(() => {
    const getHospitals = async () => {
      setHospitals([]);
      setIsLoading(true);
      try {
        const data = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
        );
        setHospitals(data.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    if (state && city) {
      getHospitals();
    }
  }, [state, city]);

  useEffect(() => {
    setState(seachParams.get("state"));
    setCity(seachParams.get("city"));
  }, [seachParams]);

  // show booking modal
  const handleBookingModal = (details) => {
    setBookingDetails(details);
    setIsModalOpen(true);
  };

  return (
    <>
      <NavBar />
      <Box
        sx={{
          background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
          minHeight: "100vh",
          pb: { xs: 4, md: 6 }
        }}
      >
        <Box
          sx={{
            position: "relative",
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: { xs: "12px", md: "16px" },
            borderBottomRightRadius: { xs: "12px", md: "16px" },
            pb: { xs: 4, md: 6 }
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              background: "#fff",
              p: { xs: 2.5, md: 3 },
              borderRadius: { xs: 1.5, md: 2 },
              transform: { xs: "translatey(30px)", md: "translatey(50px)" },
              mb: { xs: "30px", md: "50px" },
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              mx: { xs: 2, md: 'auto' }
            }}
          >
            <SearchHospital />
          </Container>
        </Box>

        <Container maxWidth="xl" sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 6, md: 10 }, px: { xs: 2, md: 4 } }}>
          {hospitals.length > 0 && (
            <Box sx={{ mb: { xs: 3, md: 4 } }}>
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: 20, md: 24 },
                  lineHeight: 1.2,
                  mb: 2,
                  fontWeight: 500,
                  color: '#102851'
                }}
              >
                {`${hospitals.length} medical centers available in `}
                <Box component="span" sx={{ textTransform: "capitalize", color: '#2AA7FF' }}>
                  {city.toLowerCase()}
                </Box>
              </Typography>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <Box
                  component="img"
                  src={icon}
                  sx={{
                    height: { xs: 20, md: 24 },
                    width: { xs: 20, md: 24 },
                    mt: 0.5
                  }}
                  alt="verified icon"
                />
                <Typography
                  sx={{
                    color: "#787887",
                    lineHeight: 1.5,
                    fontSize: { xs: 14, md: 16 }
                  }}
                >
                  Book appointments with minimum wait-time & verified doctor details
                </Typography>
              </Stack>
            </Box>
          )}

          <Stack alignItems="flex-start" direction={{ xs: "column", md: "row" }} spacing={{ xs: 3, md: 0 }}>
            <Stack
              spacing={3}
              width={{ xs: 1, md: "calc(100% - 384px)" }}
              mr={{ xs: 0, md: "24px" }}
            >
              {hospitals.length > 0 &&
                hospitals.map((hospital) => (
                  <HospitalCard
                    key={hospital["Hospital Name"]}
                    details={hospital}
                    availableSlots={availableSlots}
                    handleBooking={handleBookingModal}
                  />
                ))}

              {isLoading && (
                <Typography
                  variant="h3"
                  sx={{
                    bgcolor: "#fff",
                    p: { xs: 2, md: 3 },
                    borderRadius: 2,
                    textAlign: 'center',
                    fontSize: { xs: 18, md: 24 },
                    color: '#666'
                  }}
                >
                  Loading...
                </Typography>
              )}

              {!state && (
                <Typography
                  variant="h3"
                  sx={{
                    bgcolor: "#fff",
                    p: { xs: 2, md: 3 },
                    borderRadius: 2,
                    textAlign: 'center',
                    fontSize: { xs: 18, md: 24 },
                    color: '#666'
                  }}
                >
                  Please select a state and city
                </Typography>
              )}
            </Stack>

            <Box
              component="img"
              src={cta}
              sx={{
                width: { xs: '100%', md: 360 },
                maxWidth: 360,
                height: 'auto',
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                alignSelf: { xs: 'center', md: 'flex-start' }
              }}
              alt="advertisement banner"
            />
          </Stack>
        </Container>

        <BookingModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
          bookingDetails={bookingDetails}
          showSuccessMessage={setShowBookingSuccess}
        />

        <AutohideSnackbar
          open={showBookingSuccess}
          setOpen={setShowBookingSuccess}
          message="Booking Successful"
        />
      </Box>
    </>
  );
}
