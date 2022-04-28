import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "../utils/axios";

export const AuthContext = createContext({
  token: "",
  loggedIn: false,
  login: (data: any) => {},
  logout: () => {},
});

function AuthContextProvider(props: any) {
  const initialToken = Cookies.get("access") || "";
  const [token, setToken] = useState(initialToken);
  const [loading, setLoading] = useState(false);
  const isLoggedIn = !!token;

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  const loginHandler = async (data: any) => {
    setLoading(true);
    const response = await axios.post("/token/", data);
    const accessToken = response.data["access"];
    if (accessToken) {
      // console.log(response.data["access"])
      Cookies.set("access", accessToken);
      setToken(accessToken);
      // add token into axios headers
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    }

    setLoading(false);
  };

  const logoutHandler = () => {
    Cookies.remove("access");
    setToken("");
    window.location.pathname = "/";
  };

  const contextData = {
    token: token,
    loggedIn: isLoggedIn,
    loading: loading,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
