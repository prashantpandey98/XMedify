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
      spacing={{ xs: 1, md: 1.5 }}
      alignItems="center"
      bgcolor={active ? "rgba(42,167,255,0.08)" : bgColor}
      p={{ xs: 1.5, md: 2 }}
      borderRadius={2}
      border={active ? "1px solid #2AA7FF" : "0"}
      boxShadow={shadow ? "0 0 24px rgba(0,0,0,0.09)" : "none"}
      sx={{
        minHeight: { xs: '80px', md: '100px' },
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
          height: { xs: 40, md: 50 },
          width: { xs: 40, md: 50 }
        }}
      />
      <Typography
        color={active ? "primary.main" : "#ABB6C7"}
        sx={{
          fontSize: { xs: '12px', md: '14px' },
          fontWeight: active ? 600 : 500,
          textAlign: 'center',
          lineHeight: 1.2
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
}
