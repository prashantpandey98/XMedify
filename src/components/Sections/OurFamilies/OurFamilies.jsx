import { Box, Container, Grid, Typography } from "@mui/material";
import banner from '../../../assets/our-families-banner.png'

export default function OurFamilies() {
    return (
        <Box sx={{
            py: { xs: 3, md: 5 },
            background: 'linear-gradient(#E7F0FF, #E8F1FF)',
            position: 'relative'
        }}>
            <Container maxWidth="xl">
                <Grid container alignItems='center' spacing={{ xs: 2, sm: 3, md: 4 }}>
                    <Grid item xs={12} sm={6} md={6} order={{ xs: 1, md: 1 }}>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                color: "primary.main",
                                fontSize: { xs: '11px', sm: '12px', md: '14px' },
                                mb: { xs: 1, md: 1.5 },
                                letterSpacing: '0.5px',
                                textAlign: { xs: 'center', md: 'left' }
                            }}
                        >
                            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                mb: { xs: 1.5, md: 2 },
                                fontSize: { xs: '24px', sm: '28px', md: '40px' },
                                fontWeight: 600,
                                lineHeight: 1.2,
                                color: '#1B3C74',
                                textAlign: { xs: 'center', md: 'left' }
                            }}
                        >
                            Our Families
                        </Typography>
                        <Typography
                            sx={{
                                color: '#77829D',
                                lineHeight: 1.6,
                                fontSize: { xs: '13px', sm: '14px', md: '16px' },
                                textAlign: { xs: 'center', md: 'left' },
                                width: '600px',
                                marginRight:'100px'
                            }}
                        >
                            We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
                        </Typography>
                    </Grid>

                    <Grid item xs={12}  order={{ xs: 2}} >
                        <Box
                            component='img'
                            src={banner}
                            sx={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: { xs: '100%', sm: '350px', md: '500px' },
                                borderRadius: '12px',
                                mx: 'auto',
                                display: 'block'
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}