import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";
import {MyButtonContained} from "../../Button/button";
import {registrCourier} from "../../../store/couriers/actions";
import {useDispatch} from "react-redux";

export const CourierRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    console.log('name', e.target.value)
    setName(e.target.value);
  };
  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
    setSurname('');
  };
  const handleCoordChange = (e) => {
    setSurname(e.target.value);
    setSurname('');
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   try {
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  const dispatch = useDispatch();
  const registrationClick = () => {
    dispatch(registrCourier(name, surname, email, password))
  };

  return (
    <>
      <Box component="form"
           sx={{display: 'flex', flexDirection: 'column', width: '100%', maxWidth: 500}}>
        <Typography variant='h6' component='h2'>Регистрация нового курьера</Typography>

        <TextField sx={{mt: 2}}
          required
          id="outlined-name-input"
          label="name"
          type="text"
          autoComplete="current-name"
          onChange={handleNameChange}
        />
        <TextField sx={{mt: 2}}
          required
          id="outlined-surname-input"
          label="surname"
          type="text"
          autoComplete="current-surname"
          onChange={handleSurnameChange}
        />
        <TextField sx={{mt: 2}}
          required
          id="outlined-email-input"
          label="email"
          type="email"
          autoComplete="current-email"
          onChange={handleEmailChange}
        />
        <TextField sx={{mt: 2}}
          required
          id="outlined-password-input"
          label="password"
          type="password"
          autoComplete="current-password"
          onChange={handlePassChange}
        />
        <TextField sx={{mt: 2}}
            required
            id="outlined-coord-input"
            label="coordinate (ex: 55.684758,37.338521)"
            type="text"
            autoComplete="current-coord"
            onChange={handleCoordChange}
        />
        <Box  sx={{mt: 2}}>
          <MyButtonContained text={"Зарегистрировать"} onClick={registrationClick}/>
        </Box>
      </Box>
    </>
  )
};
