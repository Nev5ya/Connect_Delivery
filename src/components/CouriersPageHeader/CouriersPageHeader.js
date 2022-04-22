import * as React from "react";
import Typography from '@mui/material/Typography';
import {CourierStatusChange} from "../CourierStatusChange/CourierStatusChange";
import {Box, Divider} from "@mui/material";
import {useSelector} from "react-redux";
import {selectTransitOrderForCourier} from "../../store/orders/selector";
import {CourierMenu} from "../CourierMenu/CourierMenu";

const CouriersPageHeader = ({currentCourier={}}) => {
    const currentOrder = useSelector((state) => selectTransitOrderForCourier(state, currentCourier.id));
    const courierBusy = currentOrder?.length > 0;

     return (
        <>
            <Box sx={{width: '100%', typography: 'body1'}}>
                <Box sx={{ mb: 3, mt: 2, display: 'flex', justifyContent: 'left'}}>
                    <CourierMenu/>
                        <Typography sx={{ml: 4, mt: 1}}  variant="h4" component="h2" >
                            {currentCourier?.name}
                            <span className="courier-status"></span>
                        </Typography>
                        <Box sx={{mt: 1.5}}>
                            <CourierStatusChange  courier={currentCourier} courierBusy={courierBusy}/>
                        </Box>

                </Box>
                <Divider variant='string' sx={{ mt: 3, mb: 3 }} />
            </Box>
        </>
    );
};

export default CouriersPageHeader;