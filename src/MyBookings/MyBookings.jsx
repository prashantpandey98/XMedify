import { Box, Typography, Container, Stack } from "@mui/material";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import { useEffect, useState } from "react";
import cta from "../assets/cta.png";
import SearchBar from "../components/SearchBar/SearchBar";
import NavBar from "../components/NavBar/NavBar";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  useEffect(() => {
    const localBookings = localStorage.getItem("bookings") || "[]";
    setBookings(JSON.parse(localBookings));
  }, []);

  useEffect(() => {
    setFilteredBookings(bookings);
  }, [bookings]);

  //Separate page/component to render all the booked hospitals of user alogwith chosen date and time slot
  //It utilises HospitalCard component to generate the cards with data
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
            pb: { xs: 4, md: 6 },
            pt: { xs: 3, md: 4 }
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 2, md: 5 } }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 3, md: 12 }}
              alignItems={{ xs: "center", md: "flex-end" }}
            >
              <Typography
                component="h1"
                sx={{
                  pb: { xs: 0, md: 1 },
                  fontSize: { xs: 28, md: 40 },
                  fontWeight: 700,
                  color: "#fff",
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                My Bookings
              </Typography>
              <Box
                sx={{
                  bgcolor: "#fff",
                  p: { xs: 2.5, md: 3 },
                  flexGrow: 1,
                  borderRadius: { xs: 1.5, md: 2 },
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  transform: { xs: "translateY(30px)", md: "translateY(50px)" },
                  width: { xs: 1, md: "auto" },
                  mx: { xs: 1, md: 0 }
                }}
              >
                <SearchBar list={bookings} filterList={setFilteredBookings} />
              </Box>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="xl" sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 6, md: 10 }, px: { xs: 2, md: 4 } }}>
          <Stack alignItems="flex-start" direction={{ xs: "column", md: "row" }} spacing={{ xs: 3, md: 0 }}>
            <Stack
              spacing={3}
              width={{ xs: 1, md: "calc(100% - 384px)" }}
              mr={{ xs: 0, md: "24px" }}
            >
              {filteredBookings.length > 0 &&
                filteredBookings.map((hospital) => (
                  <HospitalCard
                    key={hospital["Hospital Name"]}
                    details={hospital}
                    booking={true}
                  />
                ))}

              {filteredBookings.length === 0 && (
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
                  No Bookings Found!
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
      </Box>
    </>
  );
}
