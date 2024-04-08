import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { VissuallyHiddenInput } from "../components/styles/StyledComponents";
import { useFileHandler, useInputValidation } from "6pp";
import { usernameValidator } from "../utils/validators";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin((prev) => !prev);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useInputValidation("");

  const avatar = useFileHandler("single");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleSignUP = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgb(185, 82, 41), rgb(109, 213, 250))",
        }}
      >
        <Container
          component={"main"}
          maxWidth={"xs"}
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={6}
            sx={{
              p: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isLogin ? (
              <>
                <Typography variant="h5">Login</Typography>
                <form
                  style={{ width: "100%", marginTop: "16px" }}
                  onSubmit={handleLogin}
                >
                  <TextField
                    required
                    fullWidth
                    variant="outlined"
                    label="Username"
                    margin="normal"
                    autoComplete="off"
                    value={username.value}
                    onChange={username.changeHandler}
                  />
                  <TextField
                    required
                    fullWidth
                    type="password"
                    variant="outlined"
                    label="Password"
                    margin="normal"
                    autoComplete="off"
                    value={password.value}
                    onChange={password.changeHandler}
                  />
                  <Button
                    sx={{ mt: 2 }}
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                  >
                    Login
                  </Button>
                  <Typography textAlign={"center"} sx={{ mt: 1 }}>
                    Or
                  </Typography>
                  <Button
                    sx={{ mt: 1 }}
                    variant="text"
                    fullWidth
                    onClick={() => toggleLogin()}
                  >
                    Sign Up Instead
                  </Button>
                </form>
              </>
            ) : (
              <>
                <Typography variant="h5">Sign Up</Typography>
                <form
                  style={{ width: "100%", marginTop: "16px" }}
                  onSubmit={handleSignUP}
                >
                  <Stack position={"relative"} width={"8rem"} margin={"auto"}>
                    <Avatar
                      sx={{
                        width: "8rem",
                        height: "8rem",
                        objectFit: "contain",
                      }}
                      src={avatar.preview}
                    />

                    <IconButton
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        color: "white",
                        bgcolor: "rgba(0,0,0,0.5)",
                        ":hoover": { bgcolor: "rgba(0,0,0,0.8)" },
                      }}
                      component="label"
                    >
                      <>
                        <CameraAltIcon sx={{ fontSize: "1rem" }} />
                        <VissuallyHiddenInput
                          type="file"
                          onChange={avatar.changeHandler}
                        />
                      </>
                    </IconButton>
                  </Stack>
                  {avatar.error && (
                    <Typography
                      m={"1rem auto"}
                      width={"fit-content"}
                      display={"block"}
                      color="error"
                      variant="caption"
                    >
                      {avatar.error}
                    </Typography>
                  )}
                  <TextField
                    required
                    fullWidth
                    variant="outlined"
                    label="Name"
                    margin="normal"
                    autoComplete="off"
                    value={name.value}
                    onChange={name.changeHandler}
                  />
                  <TextField
                    required
                    fullWidth
                    variant="outlined"
                    label="Bio"
                    margin="normal"
                    autoComplete="off"
                    value={bio.value}
                    onChange={bio.changeHandler}
                  />
                  <TextField
                    required
                    fullWidth
                    variant="outlined"
                    label="Username"
                    margin="normal"
                    autoComplete="off"
                    value={username.value}
                    onChange={username.changeHandler}
                  />
                  {username.error && (
                    <Typography color="error" variant="caption">
                      {username.error}
                    </Typography>
                  )}
                  <TextField
                    required
                    fullWidth
                    type="password"
                    variant="outlined"
                    label="Password"
                    margin="normal"
                    autoComplete="off"
                    value={password.value}
                    onChange={password.changeHandler}
                  />
                  <Button
                    sx={{ mt: 2 }}
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                  >
                    Sign Up
                  </Button>
                  <Typography textAlign={"center"} sx={{ mt: 1 }}>
                    Or
                  </Typography>
                  <Button
                    sx={{ mt: 1 }}
                    variant="text"
                    fullWidth
                    onClick={() => toggleLogin()}
                  >
                    Log In Instead
                  </Button>
                </form>
              </>
            )}
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default Login;
