import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import {Box, CircularProgress} from "@mui/material";
import {MyButtonContained} from "../../Button/button";
import {registerCourier} from "../../../store/couriers/actions";
import {useDispatch, useSelector} from "react-redux";
import ModalWindow from "../../ModalWindow/ModalWindow";
import ErrorWindow from "../../ErrorWindow/ErrorWindow";
import {selectRegisterLoading, selectRequestCouriers} from "../../../store/couriers/selector";
import SuccessModal from "../../SuccessModal/SuccessModal";
import {REQUEST_STATUS} from "../../../utils/constants";

export const CourierRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  let [openModal, setOpenModal] = useState(false);
  const [coordinate, setCoordinate] = useState("");

  const couriersRequest = useSelector(selectRequestCouriers);

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleCoordChange = (e) => {
    setCoordinate(e.target.value);
  };

  const closeModal = () => {
    setOpenModal(false);
  };
  const loading = useSelector(selectRegisterLoading);
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
    dispatch(registerCourier(name, surname, email, password))
    setOpenModal(true)
  };

  const renderModal = () => {
    if (!openModal) {
      return null;
    }
    switch (couriersRequest.status) {
      case REQUEST_STATUS.PENDING: {
        return <CircularProgress/>
      }
      case REQUEST_STATUS.FAILURE: {
        return <ModalWindow
          openModal
          data={couriersRequest}
          component={ErrorWindow}
          closeModal={closeModal}
        />
      }
      case REQUEST_STATUS.SUCCESS: {
        return <ModalWindow
          openModal
          data={`${name} ${surname}`}
          component={SuccessModal}
          closeModal={closeModal}
        />
      }
    }
    // return couriersRequest.status !== null
    //   ? (
    //
    //     <ModalWindow
    //       openModal
    //       data={couriersRequest}
    //       component={ErrorWindow}
    //       closeModal={closeModal}
    //     />
    //   ) : (
    //     <ModalWindow
    //       openModal
    //       data={`${name} ${surname}`}
    //       component={SuccessModal}
    //       closeModal={closeModal}
    //     />
    //   );
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
        <Box sx={{mt: 2}}>
          <MyButtonContained text={"Зарегистрировать"} onClick={registrationClick}/>
        </Box>
      </Box>
      {renderModal()}
    </>
  )
};
