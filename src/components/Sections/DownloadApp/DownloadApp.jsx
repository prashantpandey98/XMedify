import mobile from "../../../assets/mobile.jpg";
import playstore from "../../../assets/playstore.png";
import apple from "../../../assets/apple-logo.png";
import arrow from "../../../assets/down-arr.png";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import SmsForm from "./SmsForm";

//download app component to render input details using SmsForm component
export default function DownloadApp() {
  return (
    <Box
      sx={{
        background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)",
        py: { xs: 4, md: 6 },
        mt: { xs: 4, md: 6 }
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
          <Grid item xs={12} md={5.5}>
            <Box
              src={mobile}
              component="img"
              sx={{
                width: '100%',
                height: 'auto',
                maxWidth: { xs: '300px', md: '400px' },
                mx: 'auto',
                display: 'block'
              }}
            />
          </Grid>

          <Grid item xs={12} md={6.5}>
            <Box
              position="relative"
              pl={{ xs: "36px", md: "50px" }}
              pr={{ xs: 2, md: 0 }}
            >
              <Typography
                variant="h2"
                mb={3}
                sx={{
                  fontSize: { xs: '32px', md: '48px' },
                  lineHeight: 1.2,
                  fontWeight: 600
                }}
              >
                Download the
                <br />
                <Box component="span" color="primary.main">
                  Medify{" "}
                </Box>
                App
              </Typography>

              <Box
                src={arrow}
                component="img"
                sx={{
                  width: { xs: 24, md: 40 },
                  height: 'auto',
                  position: "absolute",
                  left: 0,
                  top: { xs: 45, md: 50 }
                }}
              />

              <SmsForm />

              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 2, md: 2 }}
                mt={2}
              >
                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: { xs: 1.5, md: 2 },
                    px: { xs: 2, md: 3 },
                    borderRadius: 2,
                    fontSize: { xs: '14px', md: '16px' },
                    fontWeight: 600,
                    minWidth: { xs: '100%', md: '160px' },
                    '&:hover': {
                      bgcolor: "#444"
                    }
                  }}
                  size="large"
                  startIcon={<img src={playstore} height={24} alt="Google Play" />}
                  variant="contained"
                  disableElevation
                >
                  Google Play
                </Button>
                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: { xs: 1.5, md: 2 },
                    px: { xs: 2, md: 3 },
                    borderRadius: 2,
                    fontSize: { xs: '14px', md: '16px' },
                    fontWeight: 600,
                    minWidth: { xs: '100%', md: '160px' },
                    '&:hover': {
                      bgcolor: "#444"
                    }
                  }}
                  size="large"
                  startIcon={<img src={apple} height={24} alt="App Store" />}
                  variant="contained"
                  disableElevation
                >
                  App Store
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
