import { Box, Container, Grid, Typography } from "@mui/material";
import faqBanner from '../../../assets/faqs-banner.jpg'
import CustomizedAccordions from "../../Accordion/Accordion";

export default function FAQs() {

    const faqs = [
        {
            question: 'Why choose our medical for your family?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'Why we are different from others?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'Trusted & experience senior care & love',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'How to get appointment for emergency cases?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        }
    ]

    return (
        <Box sx={{ py: { xs: 3, md: 6 } }}>
            <Container maxWidth='xl'>
                <Typography
                    sx={{
                        color: 'primary.main',
                        fontWeight: 600,
                        textAlign: 'center',
                        fontSize: { xs: '12px', md: '14px' },
                        mb: 1.5,
                        letterSpacing: '0.5px'
                    }}
                >
                    Get Your Answer
                </Typography>
                <Typography
                    textAlign='center'
                    variant='h2'
                    sx={{
                        mb: { xs: 2, md: 4 },
                        fontSize: { xs: '24px', sm: '28px', md: '42px' },
                        fontWeight: 600,
                        lineHeight: 1.2,
                        px: { xs: 1, md: 0 }
                    }}
                >
                    Frequently Asked Questions
                </Typography>
                <Grid container alignItems='center' spacing={{ xs: 2, sm: 3, md: 3 }}>
                    <Grid item xs={12} sm={12} md={5} order={{ xs: 2, md: 1 }}>
                        <Box
                            src={faqBanner}
                            component='img'
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '12px',
                                maxWidth: { xs: '100%', sm: '350px', md: '450px' },
                                mx: 'auto',
                                display: 'block'
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={7} order={{ xs: 1, md: 2 }}>
                        <Box sx={{ maxWidth: { xs: '100%', md: '80%', marginLeft:'40px' } }}>
                            <CustomizedAccordions data={faqs} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}