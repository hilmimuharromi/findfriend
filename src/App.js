import {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import {Loading, CardUser} from './components'
import Logo from './assets/logo.png'
function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [fetching, setFetching] = useState(false)

 

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true)
        const {data}= await axios.get('https://randomuser.me/api/?results=2')
        console.log('result', data)
        setUsers(data.results)
      } catch(e) {
        console.log('error', e)
  
      } finally {
        setFetching(false)
        setTimeout(function(){
          setLoading(false)
        }, 1000);
      }
    }
    if(fetching) {
      getUsers()
    }
  },[fetching])

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
     <button disabled={loading} className="button primary mt-5" onClick={() => setFetching(true)}>Find</button>
    </div>
  );
}

export default App;
