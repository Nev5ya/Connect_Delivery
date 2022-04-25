import React, {useState, useRef, useEffect} from 'react';

import {Box, TextField, Button} from "@mui/material";


const AddForm = (props) => {
    // const userID = +localStorage.getItem('id_user');
    const userName = localStorage.getItem('name_user');

    const [value, setValue] = useState({text: ''});

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [value, props.chatId]);

    const onSubmit = (event) => {
        event.preventDefault();
        props.onAdd(value.text, userName);
        setValue({
            text: ''
        });
    };

    const onValueChange = (event) => {
        setValue(() => {
            return {
                text: event.target.value
            }
        })
    };

    return (
        <Box sx={{mt: 3, display: 'flex', flexDirection: 'row', width: '100%'}}>
            <TextField sx={{flexGrow: 1, mr: 2}}
                       id="outlined-multiline-static"
                       label={props.label}
                       multiline
                       rows={props.rows}
                       variant="outlined"
                       onChange={onValueChange}
                       value={value.text}
                       inputRef={inputRef}
            />
            <Button variant={'contained'} onClick={onSubmit}>
                {props.textButton}
            </Button>
        </Box>
    );
};

export default AddForm;
