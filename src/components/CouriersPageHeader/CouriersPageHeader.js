import * as React from "react";

import {Box, Typography} from "@mui/material";

import {CourierStatusChange} from "../CourierStatusChange/CourierStatusChange";
import {useSelector} from "react-redux";
import {selectTransitOrderForCourier} from "../../store/orders/selector";
import {CourierMenu} from "../CourierMenu/CourierMenu";

const CouriersPageHeader = ({currentCourier = {}}) => {
    const currentOrder = useSelector((state) => selectTransitOrderForCourier(state, currentCourier.id));
    const courierBusy = currentOrder?.length > 0;

    return (
        <>
            <Box sx={{py: 2, mx: -1, display: 'flex', alignItems: 'center'}}>
                <CourierMenu/>
                <Typography align="left" variant="h3" marginLeft={2}>
                    {currentCourier?.name}
                </Typography>
                <Box sx={{flexGrow: 1}}/>
                <Box sx={{mt: 1.5}}>
                    <CourierStatusChange courier={currentCourier} courierBusy={courierBusy}/>
                </Box>
            </Box>
        </>
    );
};

export default CouriersPageHeader;