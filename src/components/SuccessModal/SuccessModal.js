import {
  Box,
  Typography
} from "@mui/material";
import React from "react";
import {MyButtonContained} from "../Button/button";

const SuccessModal = ({ data, closeModal }) => {

  const closeSuccessModal = () => {
    closeModal();
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <Typography sx={{mt: 3, mb: 3}} variant="h5" component="div">
          Новый курьер {data} зарегистрирован!!!
        </Typography>

        <MyButtonContained text={'OK'} onClick={closeSuccessModal} />
      </Box>
    </>
  )

}

export default SuccessModal;
