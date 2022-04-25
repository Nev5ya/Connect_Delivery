import React from 'react';
import {Avatar, Typography, Box} from "@mui/material";

const Message = ({id, text, author = '', avatar}) => {
    console.log('Message', id, text, author, avatar)

    return (
        <>
            <Box sx={{mx: 2, mt: 3, mb: 1}}>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Avatar
                        alt={author.toString()}
                        src={avatar}/>
                    <Typography sx={{ml: 2}}>{author}</Typography>
                </Box>
                <Box sx={{
                    ml: 1.5,
                    width: 0,
                    height: 0,
                    borderLeft: '8px solid transparent',
                    borderRight: '8px solid transparent',
                    borderTop: '8px solid transparent',
                    borderBottom: '8px solid #ebebeb',
                }}/>
                <Box sx={{background: '#ebebeb', borderRadius: 2, p: 2}}>
                    {text}
                </Box>
            </Box>
        </>
    )
};

export default Message;