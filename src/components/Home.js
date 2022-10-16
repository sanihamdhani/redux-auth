import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/userSlice";
import { auth, onAuthStateChanged } from "../firebase";
import { Navigate } from "react-router-dom";

const Home = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // pengguna masuk, kirim detail pengguna ke redux, simpan status pengguna saat ini di state
        dispatch(
          login({
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  const logoutApp = () => {
    //kirim ke store dengan perintah logout
    dispatch(logout());
    auth.signOut();
  };

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Hallo {user?.email}</h1>
      <button onClick={logoutApp}>Logout</button>
    </div>
  );
};

export default Home;
