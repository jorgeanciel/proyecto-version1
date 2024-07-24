import { Box, Stack, SvgIcon, TextField, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Login = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 3,
        }}
      >
        <Typography variant="h5">Bienvenidos a</Typography>
        <Typography variant="h2">SisFact</Typography>
      </Box>

      <Box component="form">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SvgIcon fontSize="large">
            <AccountCircleIcon />
          </SvgIcon>
          <Typography>Inicia Secion</Typography>
        </Box>
        <Stack
          sx={{
            alignItems: "center",
            alignContent: "center",
            py: "50px",
            width: "100%",
          }}
          spacing={2}
        >
          <TextField label="Ingrese Correo" />
          <TextField label="Ingrese Contraseña" />
        </Stack>
      </Box>
    </>
  );
};

export default Login;
