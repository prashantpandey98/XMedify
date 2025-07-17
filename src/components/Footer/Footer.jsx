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
        py: { xs: 3, md: 4 },
        mt: { xs: 3, md: 4 }
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} md={3.5}>
            <Stack
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={{ xs: 2, md: 3 }}
            >
              <Box
                src={logo}
                sx={{
                  height: { xs: 28, md: 32 },
                  width: 'auto'
                }}
                alt="Medify"
                component="img"
              />
              <Stack direction="row" spacing={1.5}>
                <Box
                  component="img"
                  src={fb}
                  sx={{
                    height: { xs: 28, md: 32 },
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
                    height: { xs: 28, md: 32 },
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
                    height: { xs: 28, md: 32 },
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
                    height: { xs: 28, md: 32 },
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

          <Grid item xs={12} md={2.83}>
            <Stack spacing={{ xs: 1.2, md: 1.5 }}>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
              <FooterLink>Our Gallery</FooterLink>
              <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.83}>
            <Stack spacing={{ xs: 1.2, md: 1.5 }}>
              <FooterLink>Orthology</FooterLink>
              <FooterLink>Neurology</FooterLink>
              <FooterLink>Dental Care</FooterLink>
              <FooterLink>Opthalmology</FooterLink>
              <FooterLink>Cardiology</FooterLink>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.83}>
            <Stack spacing={{ xs: 1.2, md: 1.5 }}>
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
            pt: { xs: 1.5, md: 2 },
            mt: { xs: 2, md: 3 },
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
