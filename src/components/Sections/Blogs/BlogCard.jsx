import { Box, Stack, Typography } from "@mui/material";
import featured from '../../../assets/blog.png'
import person from '../../../assets/person.png'

export default function BlogCard() {
    return (
        <Box
            sx={{
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: 2,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%',
                width: '350px',
                marginRight:4,
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                }
            }}
        >
            <Box
                component='img'
                src={featured}
                sx={{
                    width: '100%',
                    height: { xs: '140px', sm: '120px', md: '130px' },
                    objectFit: 'cover'
                }}
            />
            <Box sx={{ p: { xs: 1.2, sm: 1, md: 1.2 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography
                    sx={{
                        color: '#77829D',
                        fontWeight: 500,
                        mb: 0.8,
                        fontSize: { xs: '11px', sm: '10px', md: '11px' }
                    }}
                >
                    Medical | March 31, 2022
                </Typography>
                <Typography
                    component='h3'
                    sx={{
                        color: '#1B3C74',
                        fontSize: { xs: '14px', sm: '13px', md: '14px' },
                        fontWeight: 600,
                        lineHeight: 1.3,
                        mb: 1.2,
                        flex: 1,
                        minHeight: { xs: '36px', sm: '32px', md: '34px' },
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}
                >
                    6 Tips To Protect Your Mental Health When You're Sick
                </Typography>
                <Stack direction='row' spacing={0.8} alignItems='center' sx={{ mt: 'auto' }}>
                    <Box
                        component='img'
                        src={person}
                        sx={{
                            height: { xs: 18, md: 20 },
                            width: { xs: 18, md: 20 },
                            borderRadius: '50%'
                        }}
                    />
                    <Typography
                        sx={{
                            color: '#1B3C74',
                            fontSize: { xs: '11px', md: '12px' },
                            fontWeight: 500
                        }}
                    >
                        Rebecca Lee
                    </Typography>
                </Stack>
            </Box>
        </Box>
    )
}