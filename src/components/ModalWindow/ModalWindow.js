import { useRef, useState } from 'react';
import { Modal, Typography, Box, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useStyles } from './ModalWindowStyle';

const ModalWindow = ({data, component, openModal, closeModal}) => {
    const rootRef = useRef(null);

    const [open, setOpen] = useState(openModal);
    console.log('Modal', data, open);

    const handleClose = () => {
        console.log('closed', data);
        setOpen(false);
        closeModal();
    };

    // const handleClick = () => {
    //     console.log('handleClick ModalWindow', open);
    // };

    const Component = component;

    const classes = useStyles();
    return (
        <>
            <Modal
                className={classes.modal}
                onClose={handleClose}
                open={open}
                container={() => rootRef.current}
                // onClick={handleClick}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 570,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        padding: 1,
                    }}
                    // ref={rootRef}
                >
                    <Box className={classes.close}>
                        <CloseIcon onClick={handleClose} />
                    </Box>
                    <Box className={classes.wrapper_flex}>
                       <Component data={data} closeModal={handleClose}/>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default ModalWindow;