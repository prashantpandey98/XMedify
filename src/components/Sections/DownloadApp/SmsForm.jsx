import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";

export default function SmsForm() {
    return (
        <Box mb={{ xs: 4, md: 5 }}>
            <Typography
                fontWeight={600}
                mb={2}
                sx={{
                    fontSize: { xs: '16px', md: '18px' },
                    color: '#102851'
                }}
            >
                Get the link to download the app
            </Typography>
            <Box
                component='form'
                sx={{
                    display: 'flex',
                    gap: { xs: 2, md: 2 },
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { xs: 'stretch', md: 'flex-start' }
                }}
            >
                <TextField
                    sx={{
                        flex: 1,
                        '& .MuiOutlinedInput-root': {
                            backgroundColor: '#fff',
                            borderRadius: '8px',
                            '& fieldset': {
                                borderColor: '#E0E0E0',
                            },
                            '&:hover fieldset': {
                                borderColor: '#2AA7FF',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#2AA7FF',
                            },
                        },
                        '& .MuiInputBase-input': {
                            py: { xs: 1.5, md: 2 },
                            fontSize: { xs: '14px', md: '16px' }
                        }
                    }}
                    placeholder="Enter phone number"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Typography
                                    sx={{
                                        color: '#666',
                                        fontSize: { xs: '14px', md: '16px' },
                                        fontWeight: 500
                                    }}
                                >
                                    +91
                                </Typography>
                            </InputAdornment>
                        )
                    }}
                    required
                />
                <Button
                    type='submit'
                    size='large'
                    variant="contained"
                    disableElevation
                    sx={{
                        py: { xs: 1.5, md: 2 },
                        px: { xs: 3, md: 4 },
                        fontSize: { xs: '14px', md: '16px' },
                        fontWeight: 600,
                        borderRadius: '8px',
                        minWidth: { xs: '100%', md: '120px' },
                        whiteSpace: 'nowrap'
                    }}
                >
                    Send SMS
                </Button>
            </Box>
        </Box>
    )
}