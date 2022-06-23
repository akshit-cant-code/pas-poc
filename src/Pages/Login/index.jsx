import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Content from "../../Layouts/Content";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  username: "admin",
  password: "admin",
};

const Login = () => {
  const [loginData, setLoginData] = useState(initialState);
  const navigate = useNavigate();

  const handleInputChange = (event, property) => {
    setLoginData({ ...loginData, [property]: event.target.value });
  };

  const onSubmit = () => {
    if (loginData.username === "admin" && loginData.password === "admin") {
      navigate("/graphs");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <span
        style={{
          height: "50vh",
          width: "100vw",
          background: "#6D2077",
          position: "absolute",
          zIndex: -1,
        }}
      >
        <h3 style={{ color: "#fff", paddingLeft: "1vh" }}>Entrust</h3>
        <p style={{ color: "#fff", paddingLeft: "1vh" }}>License POC</p>
      </span>
      <Content>
        <Grid item container justifyContent="center" alignItems="center">
          <Grid
            item
            container
            justifyContent="center"
            direction="column"
            alignItems="center"
            sx={{
              background: "#fff",
              padding: "12vh 4vh",
              maxWidth: 300,
              boxShadow:
                "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)",
              borderRadius: "1vh",
            }}
          >
            <Grid
              item
              container
              display="flex"
              justifyContent="center"
              direction="column"
              sx={{ width: "100%" }}
            >
              <Grid item>
                <TextField
                  label="Username"
                  variant="outlined"
                  size="small"
                  required
                  fullWidth
                  value={loginData.username}
                  onChange={(e) => handleInputChange(e, "username")}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Password"
                  variant="outlined"
                  size="small"
                  required
                  fullWidth
                  type="password"
                  sx={{ margin: "4vh 0 5vh" }}
                  value={loginData.password}
                  onChange={(e) => handleInputChange(e, "password")}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              sx={{ width: "100%" }}
              display="flex"
              justifyContent="center"
              direction="column"
              alignItems="stretch"
            >
              <Button variant="contained" onClick={onSubmit}>
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Content>
    </>
  );
};

export default Login;
