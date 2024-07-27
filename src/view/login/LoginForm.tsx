import {
  Button,
  Divider,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const LoginForm = () => {
  return (
    <>
      <Stack spacing={2} alignItems="center" padding={5}>
        <Typography variant="h3">Registrate</Typography>
        <Typography>
          ¿Ya tienes una cuenta?{" "}
          <Link underline="hover" href="/">
            Inicia Sesion
          </Link>
        </Typography>
        <Divider />
        <Stack spacing={2} component="form">
          <TextField label="Nombres" />
          <TextField label="Apellidos" />
          <TextField label="Correo" />
          <TextField label="Contraseña" />
          <Button type="submit" variant="contained">
            Registrarse
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default LoginForm;
