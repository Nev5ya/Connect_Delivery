import Button from '@mui/material/Button';

export const Profile = ({ onLogout }) => {

  const handleClick = () => {
    onLogout();
  };

const email = localStorage.getItem('email');

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

