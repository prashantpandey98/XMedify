import { Link, Stack } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function FooterLink({ children }) {
    return (
        <Link
            underline="none"
            sx={{
                color: '#fff',
                fontWeight: 300,
                fontSize: { xs: 12, md: 13 },
                cursor: 'pointer',
                transition: 'color 0.2s ease',
                '&:hover': {
                    color: '#2AA7FF'
                }
            }}
        >
            <Stack
                direction='row'
                gap={0.3}
                alignItems="center"
                sx={{
                    '& .MuiSvgIcon-root': {
                        fontSize: { xs: 14, md: 16 },
                        transition: 'transform 0.2s ease'
                    },
                    '&:hover .MuiSvgIcon-root': {
                        transform: 'translateX(2px)'
                    }
                }}
            >
                <KeyboardArrowRightIcon />
                {children}
            </Stack>
        </Link>
    )
}