import React, { useState, useRef, useEffect } from 'react';
import {Box, Button, Icon, TextField} from "@mui/material";
import {MyButtonContained} from "../Button/button";

const AddForm = (props) => {

    const [value, setValue] = useState({text:''});

    const inputRef = useRef(null);

    useEffect(() => {
        console.log('inputRef.current',inputRef.current)
        inputRef.current.focus();
      },[value, props.chatId]);

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('form', value)
        props.onAdd(value.text, 'Human');
        setValue({
            text: ''
        });
    };

    const onValueChange = (event) => {
        setValue(() => {
            console.log('onValueChange')
            return {
                text: event.target.value
            }
        })
    };
    console.log('AddForm', props.chatId)
    
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
        {/*<Button*/}
        {/*    type="submit"*/}
        {/*    variant="contained"*/}
        {/*    color="primary"*/}
        {/*    size="large"*/}
        {/*    className="button"*/}
        {/*    endIcon={<Icon>send</Icon>}*/}
        {/*    >{props.textButton}*/}
        {/*</Button>*/}
            <Box >
                <MyButtonContained text={props.textButton} onClick={onSubmit}/>
            </Box>

        </Box>
    );
};

export default AddForm;
