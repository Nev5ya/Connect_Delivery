import React, { useState, useRef, useEffect } from 'react';
import {Box,TextField} from "@mui/material";
import {MyButtonContained} from "../Button/button";



const AddForm = (props) => {
    // const userID = +localStorage.getItem('id_user');
    const userName = localStorage.getItem('name_user');

    const [value, setValue] = useState({text:''});

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
      },[value, props.chatId]);

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
        <Box sx={{ mt:2, display: 'flex', flexDirection: 'row', width: '100%'}}>

            <TextField  sx={{ width: '100%' }}
                id="outlined-multiline-static"
                label={props.label}
                multiline
                rows={props.rows}
                variant="outlined"
                onChange={onValueChange}
                value={value.text}
                inputRef={inputRef}
            />
            <Box >
                <MyButtonContained text={props.textButton} onClick={onSubmit}/>
            </Box>

        </Box>
    );
};

export default AddForm;
