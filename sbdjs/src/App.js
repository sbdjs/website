//import logo from './logo.svg';
import './App.css';
import AddBot from './AddBot';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {
    loginWithPopup, 
    loginWithRedirect, 
    logout, 
    user, 
    isAuthenticated
  } = useAuth0();
  
  return (
    <div className="App">
      <h1>Autho0 auth</h1>
      <ul>
        <li>
          <button className={ isAuthenticated ? "hidden" : "bg-blue-500" } onClick={loginWithPopup}>Login with Popup</button>
        </li>
        <li>
          <button className={ isAuthenticated ? "hidden" : "bg-blue-500" } onClick={loginWithRedirect}>Login with Redirect</button>
        </li>
        <li>
          <button className={ isAuthenticated ? "" : "hidden"} onClick={logout}>Logout</button>
        </li>
      </ul>
      <h3>User is { isAuthenticated ? "Logged" : "Not logged"}</h3>
      <pre style={{textAlign: 'start'}}>
        {JSON.stringify(user, null, 2)}
      </pre>
      <AddBot />
    </div>
  );
}

export default App;
