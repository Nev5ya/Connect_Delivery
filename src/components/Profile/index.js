import {useEffect, useState} from "react";
import { uploadBytes,ref, getDownloadURL } from "firebase/storage";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { storage } from "../../services/firebase"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

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

export const Profile = ({ onLogout }) => {
  let name;

  const [state, setState ] = useState({ selectedFile: null });

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

  switch(role) {
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
    setState({ selectedFile: event.target.files[0] })
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
    return { name, value };
  }

  const rows = [
    createData('* e-mail:', `${email}`),
    createData('*  phone:', '+7 920 520 52 52'),
    createData('*  city:', 'Nizhniy Novgorod'),
    createData('date of birth:', '1988.01.01'),
  ];

  return (
  <div className="profile">
      <br/>
      <Stack direction="row" spacing={1}>
        <Chip sx={{ color: 'primary.main', fontWeight: 'bold' }} label="Personal Account" />
    </Stack>
    <br/>
      <aside>
            <div className="left_box">
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar className="photo_profile" src={photo} sx={{ width: 256, height: 256 }}/>
            </StyledBadge>
            <br/>
            <br/>
            <Button variant="contained" disabled>change password</Button>
            <br/>
            <br/>
            <Button variant="contained" onClick={handleClick}>Logout</Button>
            <br/>
            <br/>
            <Button variant="contained" onClick={handleClickOpen}>
                изменить аватарку
            </Button>
            <br/>
            <br/>
            <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Загрузить новую аватарку</DialogTitle>
            <DialogContent>
            <TextField type="file" id="file-uploader"  onChange={fotoChangedHandler}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={uploadHandler}>Upload!</Button>
            </DialogActions>
            </Dialog>
            </div>
      </aside>
      <TableContainer sx={{ maxWidth: 320 }} component={Paper}>
        <Table sx={{ maxWidth: 320 }} aria-label="customized table">
            <TableBody>
            {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell sx={{ color: 'primary.main' }}  align="right">{row.value} </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
        </Table>
      </TableContainer>
      <br/>
      <Button variant="contained" disabled>edit</Button>
  </div>

    );
};
