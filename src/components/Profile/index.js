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

    const [openEdit, setOpenEdit] = useState(false);

    let [city, setCity] = useState(localStorage.getItem('city'));

    let [phone, setPhone] = useState(localStorage.getItem('phone'));

    let [date_of_birth, setDate_of_birth] = useState(localStorage.getItem('date_of_birth'));

    const photo = ("../images/default.jpg");

    let email = localStorage.getItem('email');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpenEdit = () => {
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const role = localStorage.getItem('role_id');

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

    const inputData = {
        "auth-token": `${localStorage.getItem("auth-token")}`,
        "data": {
            phone: phone,
            city: city,
            date_of_birth: date_of_birth
          }
    }

    async function getEditingData ()  {
        const response = await  fetch('https://xn--l1aej.pw/api/profile/update', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          },
          body:JSON.stringify(inputData)
        })
       .then(response => response.json())
       .then(data =>  console.log(data))
       .catch(err => console.log(err)) 
  }
 
    const handleEdit = () => {
        getEditingData()
        localStorage.setItem('city',city);
        localStorage.setItem('phone',phone);
        localStorage.setItem('date_of_birth',date_of_birth);
        setOpenEdit(false)
    }

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
        createData('телефон:', phone),
        createData('город:', city),
        createData('дата рождения:', date_of_birth),
    ];

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
      };

    const handleCityChange = (e) => {
        setCity(e.target.value);
      };
    
    const handleBirthdayChange = (e) => {
        setDate_of_birth(e.target.value);
      };

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
                                <Button variant="outlined" onClick={handleClose}>отменить</Button>
                                <Box sx={{flexGrow:1}}/>
                                <Button variant="contained" onClick={uploadHandler}>загрузить</Button>
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
                                <Button variant="contained" onClick={handleClickOpenEdit}>редактировать</Button>
                                <Button variant="contained" onClick={handleClick} align={'center'}>Выход</Button>

                                <Dialog open={openEdit} onClose={handleCloseEdit}>
                                    <DialogTitle>Изменить данные</DialogTitle>
                                    <DialogContent id="formElem"dividers>
                                    <Box
                                      sx={{

                                        width: '100%' ,


                                      }}
                                    >
                                        <TextField fullWidth label="телефон" type="text" id="margin-dense" margin="dense" autoFocus onChange={handlePhoneChange}/>
                                        <TextField fullWidth label="город" type="text" id="margin-dense" margin="dense" onChange={handleCityChange}/>
                                        <TextField fullWidth label="дата рождения" type="text" id="margin-dense" margin="dense" onChange={handleBirthdayChange}/>
                                    </Box>
                                    </DialogContent>
                                    <DialogActions sx={{p:3}}>
                                        <Button variant="outlined" onClick={handleCloseEdit}>отменить</Button>
                                        <Box sx={{flexGrow:1}}/>
                                        <Button variant="contained" onClick={handleEdit}>Изменить данные</Button>
                                    </DialogActions>
                                </Dialog>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

