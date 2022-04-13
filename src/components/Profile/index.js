import {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export const Profile = ({ onLogout }) => {
  const [photo, setPhoto] = useState("");

  const email = localStorage.getItem('email');

  const role = localStorage.getItem('role_id');

  let name; 
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

  useEffect(() => {
    setPhoto ("../images/" + name + "-2.jpg");
  }, [name]);

  const handleClick = () => onLogout()
 
  const handleChangePhoto = ()=> setPhoto("../images/default.jpg")

  return (
  <div className="profile">
      <header className="showlogin">Personal Account</header>
      <aside>
            <div className="left_box"> 
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar className="photo_profile" src={photo} sx={{ width: 256, height: 256 }}/>
            </StyledBadge>
                &nbsp; &nbsp;  filled 34% &nbsp;
            <progress value="34" max="100">
              <div id="progress" className="graph"></div>
              <div id="bar" ></div>
             </progress>
             <br/>
             <br/>
            <Button variant="contained" onClick={handleChangePhoto}>change photo</Button>
            <br/>
            <br/>
            <Button variant="contained" disabled>change password</Button>
            <br/>
            <br/>
            <Button variant="contained" onClick={handleClick}>Logout</Button>
            <br/>
            <br/>
            </div>
      </aside>
      <main>
        <li type ="none" style={{ color: "#1865BC" }}><label style={{ color: "black" }}>* e-mail: </label> {email} &#10031;</li>
        <li type ="none" style={{ color: "#1865BC" }}><label style={{ color: "black" }}>*  phone:</label> +7 920 520 52 52 &#10031;</li>
        <li type ="none" style={{ color: "#1865BC" }}><label style={{ color: "black" }}>sex:</label>  man</li>
        <li type ="none" style={{ color: "#1865BC" }}><label style={{ color: "black" }}>*  city:</label> Nizhniy Novgorod &#10031;</li>
        <li type ="none" style={{ color: "#1865BC" }}><label style={{ color: "black" }}>street:</label>    Minina str. 1</li>
        <li type ="none" style={{ color: "#1865BC" }}><label style={{ color: "black" }}>house number:</label>    1</li>
        <li type ="none" style={{ color: "#1865BC" }}><label style={{ color: "black" }}>app.:</label>    1</li>
        <li type ="none" style={{ color: "#1865BC" }}><label style={{ color: "black" }}>date of birth:</label>    1988.01.01 &#9773;</li>
        <li type ="none" style={{ color: "#1865BC" }}><label style={{ color: "black" }}>hobby:</label>    travel &#9786;</li>
        <br/>
        <Button variant="contained" disabled>edit</Button>

      </main>
  </div>

  );
};

