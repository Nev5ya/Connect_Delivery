import {
  Typography,
  Button
} from "@mui/material";
import React from "react";

const SuccessModal = ({ data, closeModal }) => {

  const closeSuccessModal = () => closeModal();

  return (
    <>
        <Typography sx={{mt: 3, mb: 3}} variant="h5" component="div">
          {data}
        </Typography>
        <Button fullWidth variant={'contained'} onClick={closeSuccessModal}>Ok</Button>
    </>
  )
}

export default SuccessModal;
