/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import Button from '@mui/material/Button';
import { ref, onValue } from "firebase/database";
import { db } from "../../services/firebase";
// import "./style.css";


export const Profile = ({ onLogout }) => {
  const handleClick = () => {
    onLogout();
  };

  useEffect(() => {
    const profileDbRef = ref(db, "profile/login");
    const unsubscribe = onValue(profileDbRef, (snapshot) => {
      const data = snapshot.val();
      const showlogin = document.querySelector(".left_box");
      const div = document.createElement("div");
      div.innerHTML = "Login:" + data.login;
      document.body.append(div);
      div.classList.add("userlogin");
      showlogin.before(div);
    });
    return unsubscribe;
  }, []);

  return (
  <div className="profile">
      <header className="showlogin">Personal Account</header>
      <aside>
            <div className="left_box"> 
            <img className="photo_profile" src="../images/profile.png" alt="logo"></img>
                filled 34%
            <progress value="34" max="100">
              <div id="progress" className="graph"></div>
              <div id="bar" ></div>
             </progress>
             <br/>
            <Button variant="contained" disabled>change password</Button>
            <br/>
            <Button variant="contained" onClick={handleClick}>Logout</Button>
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
        <li type ="none" style={{ color: "#1865BC" }}><label style={{ color: "black" }}>date of birth:</label>    1980.01.01 &#9773;</li>
        <li type ="none" style={{ color: "#1865BC" }}><label style={{ color: "black" }}>hobby:</label>    travel &#9786;</li>
        <br/>
        <Button variant="contained" disabled>edit</Button>
      </main>
      <footer className="footer">
        <ul>
            <li><a href="#"><i className="fab fa-telegram icon"></i></a></li>
            <li><a href="#"><i className="fab fa-vk icon"></i></a></li>
            <li><a href="#"><i className="fa fa-signal icon"></i></a></li>
            <li><a href="#"><i className="fab fa-google-plus-g icon"></i></a></li>
        </ul>
      </footer>
  </div>

  );
};

