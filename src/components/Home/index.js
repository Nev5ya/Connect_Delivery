import { useState, useEffect } from "react";
import { login} from "../../services/firebase";
import { ref, set, onValue } from "firebase/database";
import { db } from "../../services/firebase";
import {Paper, Box, TextField, Button} from "@mui/material";
// import "./style.css";

const onLogin = async (email, pass) => {
  try {
    await login(email, pass);
  } catch (e) {
    alert("We haven't such login, please re-enter");
    console.log(e);
  }
};


export const Home = () => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };


  useEffect(() => {
    const profileDbRef = ref(db, "profile/login");
    const unsubscribe = onValue(profileDbRef, (snapshot) => {
      const data = snapshot.val();
      setLogin(data?.login || "");
    });
    return unsubscribe;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin("");
    setPass("");
    onLogin(login, pass);

    set(ref(db, "profile/login"), {
      login: login,
    });
  };

  return (
      <>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Paper elevation={3} sx={{width: 400, mt: '30vh', p:5}}>
            <form onSubmit={handleSubmit}>
              <Box sx={{px: '10%'}}>
                <img src='./images/cd.svg' alt="Connect Delivery" />
              </Box>
              <TextField
                  type="email"
                  placeholder="Email"
                  fullWidth
                  variant="outlined"
                  label="login"
                  id="login"
                  sx={{mt: 3}}
                  value={login}
                  onChange={handleLoginChange}
                  required
                  autoFocus
              />
              <TextField
                  type="password"
                  placeholder="Password"
                  fullWidth
                  variant="outlined"
                  label="password"
                  id="password"
                  sx={{mt: 3}}
                  value={pass}
                  onChange={handlePassChange}
                  required
                  autoFocus
              />
              <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  size="large"
                  sx={{mt:4}}
              >Войти</Button>
            </form>
          </Paper>
        </Box>
      </>
  );
};
