import { Box, Stack, Typography } from "@mui/material";

export default function IconCard({
  img,
  title,
  bgColor,
  active = false,
  shadow = false,
}) {
  return (
    <Stack
      spacing={{ xs: 0.5, sm: 1, md: 2 }}
      alignItems="center"
      bgcolor={active ? "rgba(42,167,255,0.08)" : bgColor}
      p={{ xs: 1, sm: 1.5, md: 2 }}
      borderRadius={2}
      border={active ? "1px solid #2AA7FF" : "0"}
      boxShadow={shadow ? "0 0 24px rgba(0,0,0,0.09)" : "none"}
      sx={{
        minHeight: { xs: '70px', sm: '80px', md: '100px' },
        transition: 'transform 0.2s ease',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-2px)'
        }
      }}
    >
      <Box
        component="img"
        src={img}
        sx={{
          height: { xs: 32, sm: 40, md: 60 },
          width: { xs: 32, sm: 40, md: 60 }
        }}
      />
      <Typography
        color={active ? "primary.main" : "#ABB6C7"}
        sx={{
          fontSize: { xs: '10px', sm: '12px', md: '14px' },
          fontWeight: active ? 600 : 500,
          textAlign: 'center',
          lineHeight: 1
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
}
