import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, signUp } from "../../services/firebase";
import { ref, set, onValue } from "firebase/database";
import Checkbox from "@mui/material/Checkbox";

import { toggleLogReg } from "../../store/home/actions";
import { db } from "../../services/firebase";
import "./style.css";
import {Redirect} from "react-router-dom";

const onLogin = async (email, pass) => {
  try {
    await login(email, pass);
    // setAuthed(true);
  } catch (e) {
    alert("We haven't such login, please re-enter");
    console.log(e);
  }
};

const onSignUp = async (email, pass) => {
  try {
    await signUp(email, pass);
    // setAuthed(true);
    return <Redirect to="/Profile" />;
  } catch (e) {
    console.log(e);
    alert("You enter wrong login or password, please check conditions ");
  }
};

export const Home = () => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const showReg = useSelector((state) => state.home.showReg);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleLogReg);
  };

  useEffect(() => {
    const profileDbRef = ref(db, "profile/login");
    const unsubscribe = onValue(profileDbRef, (snapshot) => {
      const data = snapshot.val();
      setLogin(data?.login || "");
    });
    return unsubscribe;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin("");
    setPass("");

    if (showReg) {
      onLogin(login, pass);
    } else {
      onSignUp(login, pass);
    }
 
    set(ref(db, "profile/login"), {
      login: login,
    });
  };

  return (
      <div className="checkIn">
        <div><h3>{showReg ? "Login" : "SignUp"}</h3></div>
        <div>
          <form className="checkInForm" onSubmit={handleSubmit}>
            <input type="text" value={login} onChange={handleLoginChange} />
            <input type="password" value={pass} onChange={handlePassChange} />
            <input type="submit" />
            <Checkbox
              onChange={handleClick}
              inputProps={{ "aria-label": "primary checkbox" }}
              defaultChecked
            />
            {showReg && <div className="SN"></div>}
            </form>
        </div>
        <div><img src="../images/mainP.jpg" alt="logo"></img></div>
      </div>
  );
};