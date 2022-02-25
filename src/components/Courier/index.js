import * as React from 'react';

// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import CourierOrder from './CourierOrder/CourierOrder';


export const Courier = () => {
    // const [value, setValue] = React.useState(0);
    //
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    return (
        <div>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                    <CourierOrder />
            </Box>
        </div>
    );
};
