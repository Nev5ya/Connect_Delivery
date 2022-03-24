import { useState, useEffect } from "react";
import { useSelector} from "react-redux";
import { login} from "../../services/firebase";
import { ref, set, onValue } from "firebase/database";
import { db } from "../../services/firebase";
// import "./style.css";

const onLogin = async (email, pass) => {
  try {
    await login(email, pass);
  } catch (e) {
    alert("We haven't such login, please re-enter");
    console.log(e);
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
    onLogin(login, pass);

    set(ref(db, "profile/login"), {
      login: login,
    });
  };

  return (
      <div className="checkIn">

        <div>
          <form className="checkInForm" onSubmit={handleSubmit}>
            <input type="text" value={login} onChange={handleLoginChange} />
            <input type="password" value={pass} onChange={handlePassChange} />
            <input type="submit" />
            </form>
        </div>
        <div><img src="../images/mainP.jpg" alt="logo"></img></div>
      </div>
  );
};
