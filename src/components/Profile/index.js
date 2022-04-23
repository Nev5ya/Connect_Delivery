import {useEffect, useState} from "react";
import {uploadBytes, ref, getDownloadURL} from "firebase/storage";

import {
    Button,
    Grid,
    Avatar,
    TextField,
    Dialog,
    Box,
    Typography,
    Paper,
    TableRow,
    TableCell,
    TableBody,
    Table,
    DialogTitle,
    DialogActions,
    DialogContent,
    TableContainer
} from '@mui/material';

import {storage} from "../../services/firebase"

export const Profile = ({onLogout}) => {
    let name;

    const [state, setState] = useState({selectedFile: null});

    const [open, setOpen] = useState(false);

    const photo = ("../images/default.jpg");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const email = localStorage.getItem('email');

    const role = localStorage.getItem('role_id');

    let city = localStorage.getItem('city');

    let phone = localStorage.getItem('phone');

    let nameUser = localStorage.getItem('name_user');

    const pattern = <h4 style={{color: 'red'}}>нужно заполнить</h4>

    city = (city === 'null') ?  pattern : city;

    phone = (phone === 'null') ?  pattern : phone;

    nameUser = (nameUser === 'null') ? 'нужно заполнить': nameUser; 

    switch (role) {
        case '1':
            name = "courier";
            break;

        case '2':
            name = "admin";
            break;

        case '3':
            name = "chief";
            break;

        default:
            name = "";
            break;
    }

    const photoFbName = (`${name}-avatar.jpg`);

    useEffect(() => {
        getDownloadURL(ref(storage, `images/${name}-avatar.jpg`))
            .then((url) => {
                const img = document.querySelector('img')
                img.setAttribute('src', url)
            })
            .catch((error) => {
                console.log(error)
                // Handle any errors
            });
    }, [name])

    const handleClick = () => onLogout()

    const uploadHandler = () => {
        const profileImagesRef = ref(storage, `images/${photoFbName}`);
        uploadBytes(profileImagesRef, state.selectedFile);
        setOpen(false);
    }

    const fotoChangedHandler = event => {
        setState({selectedFile: event.target.files[0]})
        const reader = new FileReader();
        const file = event.target.files[0];
        reader.readAsDataURL(file);

        reader.addEventListener('load', (event) => {
            const img = document.querySelector('img');
            img.src = event.target.result;
            img.alt = file.name;
        });
    }

    const createData = (name, value) => {
        return {name, value};
    }

    const rows = [
        createData('* e-mail:', email),
        createData('*  phone:', phone),
        createData('*  city:', city),
        createData('date of birth:', <h4>1988.01.01</h4>),
    ];

    return (
        <>
            <Box sx={{flexGrow: 1, mt: 4}}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={4} lg={3} align={'center'}>
                        <Avatar className="photo_profile" src={photo} sx={{width: 256, height: 256}}/>
                        <Button variant="contained" fullWidth sx={{mt: 3}} onClick={handleClickOpen}>
                            изменить аватарку
                        </Button>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Загрузить новую аватарку</DialogTitle>
                            <DialogContent>
                                <TextField type="file" id="file-uploader" onChange={fotoChangedHandler}/>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={uploadHandler}>Upload!</Button>
                            </DialogActions>
                        </Dialog>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={9}>
                        <Paper elevation={2} sx={{maxWidth: 600, p: 3}}>
                            <Typography align="left" variant="h3" mb={4}>
                                {nameUser}
                            </Typography>
                            <TableContainer>
                                <Table>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.name}>
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell sx={{color: 'primary.main'}}
                                                           align="right">{row.value} </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 4, mb: 2}}>
                                <Button variant="contained" disabled>edit</Button>
                                <Button variant="contained" disabled>change password</Button>
                            </Box>
                            <Box sx={{display: 'flex', justifyContent: 'right'}}>
                                <Button variant="contained" onClick={handleClick} align={'center'}>Logout</Button>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>

    );
};
