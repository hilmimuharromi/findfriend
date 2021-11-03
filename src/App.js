import {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import {Loading, CardUser} from './components'
import Logo from './assets/logo.png'
function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const getUsers = async () => {
    try {
      setLoading(true)
      const {data}= await axios.get('https://randomuser.me/api/?results=2')
      setUsers(data.results)
    } catch(e) {
      console.log('error', e)

    } finally {
      setTimeout(function(){
        setLoading(false)
      }, 1000);
    }
  }
  useEffect(() => {
    getUsers()
  },[])

  return (
    <div className="App">
      <div>
        <img src={Logo} alt='' />
      </div>
      <div className="flex mb-10 mt-10 min-h-30">
        {
          !loading ? users.map((item) => (
            <CardUser data={item} /> 
          )) : <>
          <Loading />
          <Loading />
          </>
        }
      </div>
     <button disabled={loading} className="button primary mt-5" onClick={getUsers}>Find</button>
    </div>
  );
}

export default App;
