import {useState} from 'react';

import {Drawer, IconButton, Box, List, ListItem, ListItemText} from '@mui/material';
import {ArrowBack as ArrowBackIcon, Menu as MenuIcon,} from '@mui/icons-material';


export default function Menu({menuItem}) {
    const [state, setState] = useState(false);

    const toggleDrawer = (foo) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        )
            return;
        if (typeof foo === 'function') foo();
        setState(!state);
    };

    return (
        <>
            <IconButton onClick={toggleDrawer()}>
                {state ? <ArrowBackIcon/> : <MenuIcon/>}
            </IconButton>
            <Drawer open={state} onClose={toggleDrawer()}>
                {/*Todo: redo with List and ListItem*/}
                <Box sx={{width: 250, my: 5}}>
                    <List>
                        {menuItem.map((anchor, index) => (
                            <ListItem button={true} sx={{mx: 2}} onClick={toggleDrawer(anchor.func)} key={index}>
                                <ListItemText primary={anchor.name}/>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}