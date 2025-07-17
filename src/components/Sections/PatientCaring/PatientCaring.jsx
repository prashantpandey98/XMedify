import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import banner from '../../../assets/patientcaring.png'
import tick from '../../../assets/tick-blue.png'

export default function PatientCaring() {
    return (
        <Box sx={{
            py: { xs: 3, md: 5 },
            background: 'linear-gradient(#E7F0FF, #E8F1FF)',
            position: 'relative'
        }}>
            <Container maxWidth="xl">
                <Grid container spacing={{ xs: 3, md: 3 }} alignItems='center'>
                    <Grid item xs={12} md={5}>
                        <Box
                            component='img'
                            src={banner}
                            sx={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '420px',
                                borderRadius: '12px'
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                color: "primary.main",
                                fontSize: { xs: '12px', md: '14px' },
                                mb: 1.5,
                                letterSpacing: '0.5px'
                            }}
                        >
                            HELPING PATIENTS FROM AROUND THE GLOBE!!
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                mb: 2,
                                fontSize: { xs: '28px', md: '40px' },
                                fontWeight: 600,
                                lineHeight: 1.2
                            }}
                        >
                            Patient <Box component='span' color='primary.main'>Caring</Box>
                        </Typography>
                        <Typography
                            sx={{
                                color: '#77829D',
                                lineHeight: 1.6,
                                fontSize: { xs: '14px', md: '16px' },
                                mb: 2.5
                            }}
                        >
                            Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
                        </Typography>

                        <List sx={{ p: 0 }}>
                            <ListItem disableGutters sx={{ py: 0.5 }}>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component='img' src={tick} height={20} width={20} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Stay Updated About Your Health'
                                    primaryTypographyProps={{
                                        fontSize: { xs: '14px', md: '16px' },
                                        fontWeight: 500,
                                        color: '#1B3C74'
                                    }}
                                />
                            </ListItem>
                            <ListItem disableGutters sx={{ py: 0.5 }}>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component='img' src={tick} height={20} width={20} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Check Your Results Online'
                                    primaryTypographyProps={{
                                        fontSize: { xs: '14px', md: '16px' },
                                        fontWeight: 500,
                                        color: '#1B3C74'
                                    }}
                                />
                            </ListItem>
                            <ListItem disableGutters sx={{ py: 0.5 }}>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component='img' src={tick} height={20} width={20} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Manage Your Appointments'
                                    primaryTypographyProps={{
                                        fontSize: { xs: '14px', md: '16px' },
                                        fontWeight: 500,
                                        color: '#1B3C74'
                                    }}
                                />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}