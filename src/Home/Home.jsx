import { Container, Box, Stack } from "@mui/material";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import SearchHospital from "../components/SearchHospital/SearchHospital";
import FAQs from "../components/Sections/FAQs/FAQs";
import OurFamilies from "../components/Sections/OurFamilies/OurFamilies";
import Blogs from "../components/Sections/Blogs/Blogs";
import PatientCaring from "../components/Sections/PatientCaring/PatientCaring";
import Specialists from "../components/Sections/Specialists/Specialists";
import Specialization from "../components/Sections/Specialization/Specialization";
import Offers from "../components/Sections/Offers/Offers";
import NavBar from "../components/NavBar/NavBar";
import HeroServices from "../components/IconLayout/HeroServices";

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
          pb: { xs: 4, md: 6 }
        }}
      >
        <NavBar />
        <Container maxWidth="xl">
          <HeroSlider />
          <Stack
            sx={{
              p: { xs: 2.5, md: 8 },
              mt: { xs: -2, md: 0, lg: -6, xl: -10 },
              position: "relative",
              zIndex: 99,
              bgcolor: "#fff",
              borderRadius: { xs: "12px", md: "15px" },
              spacing: { xs: 6, md: 10 },
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              mx: { xs: 2, md: 0 }
            }}
          >
            <SearchHospital />
            <HeroServices />
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 0.5, md: 2 } }}>
        <Offers />
      </Box>

      <Box sx={{ py: { xs: 0.5, md: 2 } }}>
        <Specialization />
      </Box>

      <Box sx={{ py: { xs: 0.5, md: 2 } }}>
        <Specialists />
      </Box>

      <Box sx={{ py: { xs: 0.5, md: 2 } }}>
        <PatientCaring />
      </Box>

      <Box sx={{ py: { xs: 0.5, md: 2 } }}>
        <Blogs />
      </Box>

      <Box sx={{ py: { xs: 0.5, md: 2 } }}>
        <OurFamilies />
      </Box>

      <Box sx={{ py: { xs: 0.5, md: 2 } }}>
        <FAQs />
      </Box>
    </Box>
  );
}
