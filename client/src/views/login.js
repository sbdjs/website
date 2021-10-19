import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  if (isAuthenticated) {
      return (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
        </button>
      );
  } else {
    return(
        <button className="bg-green-450 hover:bg-green-500 transition-all ease-in-out rounded-lg py-2 px-4 text-white hover:text-gray-100 text-xl font-bold"onClick={() => loginWithRedirect()}>Se Connecter</button>
    );
  }
};

export default LoginButton;