import logo from './logo.svg';
import './App.css';
import Searchbar from './Components/Searchbar';
import Usercard from './Components/User';
import Repolist from './Components/Repolist';
import { useState } from 'react';

function App() {
  const [user,setUser]=useState(null);
  const [repos,setRepos]=useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");

  const fetchUser=async(username)=>{
    if(!username)return;

    setLoading(true);
    setError("");

    try{
      const res=await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error("User not found");

      const data = await res.json();
      setUser(data);

      const repoRes = await fetch(data.repos_url);
      const repoData = await repoRes.json();
      setRepos(repoData);
    }catch(err){
      setError(err.message);
      setUser(null);
    }
    setLoading(false);
    };
  return (
    <div className="App">
      <h1 className='HDNG'>GitHub user Finder</h1>
      <Searchbar onSearch={fetchUser}/>

      {loading && <p className='LOADING'>Loading...</p>}
      {error && <p style={{color:"green"}}>{error}</p>}

      {user && <Usercard user={user}/>}
      {repos.length > 0 && <Repolist repos={repos}/>}
    </div>
  );
}

export default App;
