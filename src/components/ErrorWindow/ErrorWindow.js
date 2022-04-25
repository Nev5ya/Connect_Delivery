import React from "react";
import { Typography, Button } from "@mui/material";

const ErrorWindow = ({data, closeModal}) => {

    const closeError = () => {
        closeModal();
    };

    return (
        <>
            <Typography sx={{mt: 3}} variant="h5">
                Ошибка при совершении операции!!!
            </Typography>
            <Typography sx={{mt: 3, mb: 3}} variant="h6" component="div">
                {data.error} - {data.status}
            </Typography>
            <Button variant={'contained'} onClick={closeError}>Ok</Button>
        </>
    )

};

export default ErrorWindow;