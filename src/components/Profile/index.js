/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ref, set, onValue } from "firebase/database";
import { db } from "../../services/firebase";
import { auth } from "../../services/firebase";
// import "./style.css";

console.log(auth);
export const Profile = ({ onLogout }) => {
  const [role, setRole] = useState("");

  const handleClick = () => {
    onLogout();
  };

  useEffect(() => {
    const profileDbRef = ref(db, "profile/login");
    const unsubscribe = onValue(profileDbRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      const showlogin = document.querySelector(".left_box");
      const div = document.createElement("div");
      div.innerHTML = "Login:" + data.login;
      document.body.append(div);
      div.classList.add("userlogin");
      showlogin.before(div);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const profileDbRef = ref(db, "profile/login/role");
    const unsubscribe2 = onValue(profileDbRef, (snapshot) => {
      const data = snapshot.val();
      setRole("admin");
      console.log(data);
    });
    return unsubscribe2;
  }, []);
console.log(role);

set(ref(db, "profile/login/role"), {
  role: role,
});

  return (
  <div className="profile">
      <header className="showlogin">Personal Account</header>
      <aside>
            <div className="left_box"> 
            <img className="photo_profile" src="../images/profile.png" alt="logo"></img>
                &nbsp; &nbsp;  filled 34% &nbsp;
            <progress value="34" max="100">
              <div id="progress" className="graph"></div>
              <div id="bar" ></div>
             </progress>
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
        <li type ="none" style={{ color: "#1865BC" }}><label style={{ color: "black" }}>* e-mail: </label>  Alex@mail.ru &#10031;</li>
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
        <br/>
        <br/>
        <Button variant="contained" color="warning">Create new *ROLE*</Button>
      </main>
      <footer className="footer">
      <br/>
        <Stack direction="row" spacing={4}>
          <a href="#"><i className="fab fa-telegram icon"></i></a>
          <a href="#"><i className="fab fa-vk icon"></i></a>
          <a href="#"><i className="fa fa-signal icon"></i></a>
          <a href="#"><i className="fab fa-google-plus-g icon"></i></a>
        </Stack>
      </footer>
  </div>

  );
};

