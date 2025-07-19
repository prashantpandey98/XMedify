import { Box, Button, Container, Grid, Typography } from "@mui/material";
import IconCard from '../../IconCard/IconCard'
import icon1 from '../../../assets/Drugstore.png'
import icon2 from '../../../assets/primary-care.png'
import icon3 from '../../../assets/cardiology.png'
import icon4 from '../../../assets/mri.png'
import icon5 from '../../../assets/blood-test.png'
import icon6 from '../../../assets/piscologist.png'
import icon7 from '../../../assets/X-Ray.png'

export default function Specialization() {

    const data = [
        { icon: icon1, title: 'Dentistry' },
        { icon: icon2, title: 'Primary Care' },
        { icon: icon3, title: 'Cardiology' },
        { icon: icon4, title: 'MRI Resonance' },
        { icon: icon5, title: 'Blood Test' },
        { icon: icon6, title: 'Piscologist' },
        { icon: icon1, title: 'Laboratory' },
        { icon: icon7, title: 'X-Ray' }
    ]

    return (
        <Box sx={{ py: { xs: 3, md: 6 }, background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
            <Container maxWidth="xl" sx={{ textAlign: 'center' }}>
                <Typography
                    variant="h2"
                    sx={{
                        mb: { xs: 2, md: 4 },
                        fontSize: { xs: '24px', sm: '28px', md: '42px' },
                        fontWeight: 600,
                        lineHeight: 1.2,
                        px: { xs: 1, md: 0 }
                    }}
                >
                    Find by specialisation
                </Typography>

                <Grid
                    container
                    spacing={{ xs: 1, sm: 1.5, md: 8 }}
                    mb={4}
                    justifyContent={'center'}
                    maxWidth={{ xs: '100%', sm: '600px', md: '800px' }}
                    mx="auto"
                    px={{ xs: 1, md: 0 }}
                >
                    {data.map(item => (
                        <Grid item xs={3} sm={3} md={4} key={item.title}>
                            <IconCard img={item.icon} title={item.title} bgColor={'#FFFFFF'} shadow={true} />
                        </Grid>
                    ))}
                </Grid>

                <Button
                    variant="contained"
                    size="large"
                    disableElevation
                    sx={{
                        px: 3,
                        py: 1.2,
                        fontSize: '14px',
                        fontWeight: 600,
                        borderRadius: '8px'
                    }}
                >
                    View All
                </Button>
            </Container>
        </Box>
    )
}