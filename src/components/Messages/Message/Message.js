import React from 'react';
import {Avatar, Divider, Grid, List, ListItem, ListItemIcon, TextField, ListItemText } from "@mui/material";

const Message = ({id, text, author='', avatar}) => {
     console.log('Message', id, text, author, avatar)

        return (
            <>
            <List>
                <ListItem button key={id}>
                    <ListItemIcon>
                    <Avatar
                        alt={author.toString()}
                        src={avatar} />
                    </ListItemIcon>
                    <ListItemText primary={author}></ListItemText>
                </ListItem>
            </List>
            <Divider />
            <Grid item xs={12} style={{padding: '10px'}}>
                <TextField 
                    // id="outlined-basic-email"  
                    label={id}
                    variant="outlined" 
                    fullWidth 
                    multiline
                    value={text}/>
            </Grid>
            <Divider />
            </>
        )
};

export default Message;