import { Box, Container, Grid, Typography } from "@mui/material";
import BlogCard from "./BlogCard";

export default function Blogs() {
    return (
        <Box sx={{ py: { xs: 3, md: 6 } }}>
            <Container maxWidth="xl">
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
                    Blog & News
                </Typography>
                <Typography
                    textAlign='center'
                    variant='h2'
                    sx={{
                        mb: { xs: 3, md: 4 },
                        fontSize: { xs: '28px', md: '42px' },
                        fontWeight: 600,
                        lineHeight: 1.2
                    }}
                >
                    Read Our Latest News
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
                    <Grid item xs={12} sm={4} md={4} maxWidth="350px">
                        <BlogCard />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} maxWidth="350px">
                        <BlogCard />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} maxWidth="350px">
                        <BlogCard />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}