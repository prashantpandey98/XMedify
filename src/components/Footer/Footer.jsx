import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import fb from "../../assets/fb.png";
import pinterest from "../../assets/pinterest.png";
import twitter from "../../assets/twitter.png";
import yt from "../../assets/yt.png";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <Box
      bgcolor="primary.secondary"
      sx={{
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 2, sm: 3, md: 30 }}>
          <Grid item xs={12} sm={12} md={8}>
            <Stack
              alignItems={{ xs: 'center', md: 'flex-start' }}
              justifyContent="flex-start"
              spacing={{ xs: 2, sm: 2.5, md: 5 }}
            >
              <Box
                src={logo}
                sx={{
                  height: { xs: 24, sm: 28, md: 32 },
                  width: 'auto'
                }}
                alt="Medify"
                component="img"
              />
              <Stack direction="row" spacing={{ xs: 1, sm: 1.5 }}>
                <Box
                  component="img"
                  src={fb}
                  sx={{
                    height: { xs: 24, sm: 28, md: 32 },
                    width: 'auto',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease',
                    '&:hover': {
                      transform: 'scale(1.1)'
                    }
                  }}
                  alt="Facebook"
                />
                <Box
                  component="img"
                  src={twitter}
                  sx={{
                    height: { xs: 24, sm: 28, md: 32 },
                    width: 'auto',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease',
                    '&:hover': {
                      transform: 'scale(1.1)'
                    }
                  }}
                  alt="Twitter"
                />
                <Box
                  component="img"
                  src={yt}
                  sx={{
                    height: { xs: 24, sm: 28, md: 32 },
                    width: 'auto',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease',
                    '&:hover': {
                      transform: 'scale(1.1)'
                    }
                  }}
                  alt="YouTube"
                />
                <Box
                  component="img"
                  src={pinterest}
                  sx={{
                    height: { xs: 24, sm: 28, md: 32 },
                    width: 'auto',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease',
                    '&:hover': {
                      transform: 'scale(1.1)'
                    }
                  }}
                  alt="Pinterest"
                />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={6} sm={4} md={6}>
            <Stack spacing={{ xs: 1.5, md: 2 }} alignItems={{ xs: 'flex-start', md: 'flex-start' }}>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
              <FooterLink>Our Gallery</FooterLink>
              <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Grid>

          <Grid item xs={6} sm={4} md={4}>
            <Stack spacing={{ xs: 1.5, md: 2 }} alignItems={{ xs: 'flex-start', md: 'flex-start' }}>
              <FooterLink>Orthology</FooterLink>
              <FooterLink>Neurology</FooterLink>
              <FooterLink>Dental Care</FooterLink>
              <FooterLink>Opthalmology</FooterLink>
              <FooterLink>Cardiology</FooterLink>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <Stack spacing={{ xs: 1.5, md: 2 }} alignItems={{ xs: 'flex-start', md: 'flex-start' }}>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
              <FooterLink>Our Gallery</FooterLink>
              <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Grid>
        </Grid>

        <Typography
          sx={{
            fontWeight: 300,
            color: "#fff",
            fontSize: { xs: 11, md: 13 },
            pt: { xs: 2, md: 3 },
            mt: { xs: 3, md: 4 },
            borderTop: "1px solid rgba(255,255,255,0.1)",
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}
