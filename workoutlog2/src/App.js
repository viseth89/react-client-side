import React, {useState, useEffect} from 'react';
import SiteBar from './home/Navbar'
import Auth from './auth/Auth'
import Sitebar from './home/Navbar';

function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }
  // Render method is below
  return (
    <div>
      <Sitebar />
      <Auth />
    </div>
  );
}

export default App;
