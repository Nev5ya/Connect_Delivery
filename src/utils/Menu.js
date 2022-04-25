import {useState} from 'react';

import {Drawer, IconButton, Box, List, ListItemButton, ListItemText} from '@mui/material';
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
                {state ? <ArrowBackIcon fontSize={'large'}/> : <MenuIcon fontSize={'large'}/>}
            </IconButton>
            <Drawer open={state} onClose={toggleDrawer()}>
                <Box sx={{width: 250, my: 5}}>
                    <List>
                        {menuItem.map((anchor, index) => (
                            <ListItemButton
                                sx={{mx: 2}}
                                onClick={toggleDrawer(anchor.func)} key={index}
                            >
                                <ListItemText primary={anchor.name}/>
                            </ListItemButton>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}