import {
    Box,
    Typography
} from "@mui/material";
import React from "react";
import {MyButtonContained} from "../Button/button";

const ErrorWindow = ({data, closeModal}) => {

    const closeError = () => {
        closeModal();
    };
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                <Typography sx={{mt: 3}} variant="h5" component="div">
                    Ошибка при совершении операции!!!
                </Typography>
                <Typography sx={{mt: 3, mb: 3}} variant="h6" component="div">
                    {data.error} - {data.status}
                </Typography>
                <MyButtonContained text={'OK'} onClick={closeError}/>
            </Box>
        </>
    )

}

export default ErrorWindow;