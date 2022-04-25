import { useRef, useState } from 'react';
import { Modal, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useStyles } from './ModalWindowStyle';

const ModalWindow = ({data, component, openModal, closeModal, setOption=''}) => {
    const rootRef = useRef(null);

    const [open, setOpen] = useState(openModal);
    // console.log('Modal', data, open, setOption);

    const handleClose = () => {
        // console.log('closed', data);
        setOpen(false);
        closeModal();
    };

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
                        width: 350,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        padding: 1,
                    }}
                    // ref={rootRef}
                >
                    <Box className={classes.close}>
                        <CloseIcon onClick={handleClose} sx={{cursor: 'pointer'}}/>
                    </Box>
                    <Box className={classes.wrapper_flex}>
                       <Component data={data} closeModal={handleClose} setOption={setOption}/>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default ModalWindow;