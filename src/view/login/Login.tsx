import {
  Box,
  Button,
  Link,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Login = () => {
  return (
    <>
      <Stack spacing={2} alignItems="center">
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

        <Stack spacing={2}>
          <Stack alignContent="center" alignItems="center">
            <SvgIcon fontSize="large">
              <AccountCircleIcon />
            </SvgIcon>
            <Typography>Inicia Secion</Typography>
            <Typography>
              ¿No tienes una cuenta?{" "}
              <Link underline="hover" href="/login-form">
                Ingresa
              </Link>
            </Typography>
          </Stack>
          <Stack spacing={2} component="form">
            <TextField label="Correo" />
            <TextField label="Contraseña" />
            <Button type="submit" variant="contained">
              Ingresar
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;
