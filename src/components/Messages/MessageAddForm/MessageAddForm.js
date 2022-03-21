
import React, { useState, useRef, useEffect } from 'react';


import {Button, Icon, TextField} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  }));

const MessageAddForm = (props) => {

    const classes = useStyles();

    const [value, setValue] = useState({text:''});

    const inputRef = useRef(null);

    useEffect(() => {
        console.log('inputRef.current',inputRef.current)
        inputRef.current.focus();
      },[value, props.chatId]);

    const onSubmit = (event) => {
        event.preventDefault();
        props.onAdd(value.text, 'Human')
        console.log('form', value)
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

    
    return (
        <form 
        className="add_form"
        onSubmit={onSubmit}>
        <TextField
            id="outlined-multiline-static"
            label={props.label}
            multiline
            rows={props.rows}
            variant="outlined"
            className={props.className}
            onChange={onValueChange}
            value={value.text}
            inputRef={inputRef}
        />
        <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className="button"
            endIcon={<Icon>send</Icon>}
            >{props.textButton}
        </Button>

    </form>
    );
};

export default MessageAddForm;
